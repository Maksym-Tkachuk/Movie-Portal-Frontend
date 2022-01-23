import style from "../UploadFilms.module.scss";
import { FC} from "react";
import { useDispatch} from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import {message } from 'antd';
import { initialValuesType } from "../UploadFilms";
import { addFilm, setResult } from "../../../../Redux/uploadFilm-reducer";






type FormUploadType ={
  field:(values:initialValuesType) =>  Array<{id:string,name:string,value:string,component:any}> 
}

const FormUpload: FC<FormUploadType> = (props) => {

  const {result} = useTypedSelector(state=>state.uploadFilm)

  const dispatch = useDispatch();
 
  if(result){
    const key = 'updatable';
    message.success({ content:"Фильм был успешно добавлен" , key, duration: 3 });
    dispatch(setResult(false))
  }




  const submit = (values:initialValuesType | any, { setSubmitting }:{setSubmitting:(isSubmitting:boolean)=>void}) => {
    dispatch(addFilm({...values}))
     for(let key in values){
      values[key]=""
     }
   setSubmitting(false);
  }

  const validate = (values:initialValuesType) => {
    const errors:any = {};
    for(let key in values){
      //@ts-ignore
      if(values[key].length< 1){
        errors[key] = 'Пустое поле'
      }
      if(/\D/.test(values.time)){
        errors.time = 'Только цифры!'
      }
    }

    return errors;
  }
  
  





  return(
       <Formik
         initialValues = {{
            name:'',
           moving: '',
           release:'',
           description:'',
           genre:[],
           country:'',
           cast:'',
           director:'',
           picture:'',
           time:''}} 
         validate={validate}
         onSubmit={submit}
       >
         {({values,isSubmitting}:any) => (
           
           <Form  style={{display:"grid"}}>

            { props.field(values).map((elem:any)=>{
              return(
                <>
                <Field key={elem.id} name={elem.name}  value={elem.value} placeholder={elem.name} component={elem.component} />
                <ErrorMessage  name={elem.name} component="div"  />
                </>
              )
            })}
          <div className={style.controlPanel}>
            <button 
              type="submit"
              className={style.button}
              disabled={isSubmitting}
            >
              Добавить фильм
            </button>

          </div>
           </Form>  
         )
 }
    </Formik>)
};

export default FormUpload;
