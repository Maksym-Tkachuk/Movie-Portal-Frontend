import style from "../UploadFilms.module.scss";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { message } from "antd";
import { Input } from "antd";
import { initialValuesType } from "../UploadFilms";
import { findFilm, removeFilm, setResult, updateFilm } from "../../../../Redux/uploadFilm-reducer";
const { Search } = Input;




type FormUpdateType={
  button:boolean
  setButton: (value:boolean)=>void
  field:(values:initialValuesType) =>  Array<{id:string,name:string,value:string,component:any}> 
  
}

const FormUpdate: FC<FormUpdateType> = (props) => {
  const dispatch = useDispatch();
  const { result, film } = useTypedSelector((state) => state.uploadFilm);
  

console.log(film)


  if (result && props.button === true) {
    const key = "updatable";
    message.success({content: "Фильм был успешно обновлен", key,duration: 3});
    dispatch(setResult(false));
  }else if(result && props.button == false){
    const key = "updatable";
    message.success({content: "Фильм был успешно удален", key,duration: 3});
    dispatch(setResult(false));
  }

  const submit = (
    values: initialValuesType | any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    props.button? dispatch(updateFilm({ ...values })):dispatch(removeFilm(values.name))
    setSubmitting(false);
  };

  const validate = (values:initialValuesType ) => {
    const errors: any = {};
    for (let key in values) {
      //@ts-ignore
      if (values[key].length < 1) {
        errors[key] = "Пустое поле";
      }
      if (/\D/.test(values.time)) {
        errors.time = "Только цифры!";
      } //@ts-ignore
      if (/\D/.test(values.release)) {
        errors.release = "Только цифры!";
      }
    }

    return errors;
  };



  const onSearch = (value: string) => dispatch(findFilm(value));

  return (
    <Formik
      initialValues={{
        name: film.name,
        moving: film.moving,
        release: film.release,
        description: film.description,
        genre: film.genre,
        country: film.country,
        cast: film.cast,
        director: film.director,
        picture: film.picture,
        time: film.time,
      }}
      validate={validate}
      onSubmit={submit}
    >
      {({ values, isSubmitting }: any) => (
        <Form style={{ display: "grid" }}>
          <Search
            className={style.search}
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
          <img
            className={style.picture}
            src={
              values.picture && typeof values.picture == "string"
                ? `${values.picture}`
                : `https://i1.7fon.org/thumb/g214883.jpg`
            }
          />

          {props.field(values).map((elem:{id:string,name:string,value:string,component:any}) => {
            return (
              <>
                <Field
                  key={elem.id}
                  name={elem.name}
                  value={elem.value}
                  placeholder={elem.name}
                  component={elem.component}
                />
                <ErrorMessage name={elem.name} component="div" />
              </>
            );
          })}
          <div className={style.controlPanel}>
            <button
               onClick={()=>props.setButton(true)}  
              type="submit"
              className={style.button}
              disabled={isSubmitting}
            >
              Внести изминения
            </button>
            <button
          onClick={()=>props.setButton(false)}  
              type="submit"
              className={style.button}
              disabled={isSubmitting}
            >
              Удалить фильм
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormUpdate;
