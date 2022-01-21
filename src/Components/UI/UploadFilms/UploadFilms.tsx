import style from "./UploadFilms.module.scss";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import FormUpload from "./FormUpload/FormUpload";
import Loader from "../../Elements/Loader/Loader";
import { Button } from "@mui/material";
import FormUpdate from "./FormUpload/FormUpdate";
import { message } from "antd";
import { setError } from "../../../Redux/filmProfile-reducer";
import PicturesWall from "./UploadFile/UploadFile";
import { TextFieldForm, TextFieldMultilineForm } from "./TextFiled/TiextField";
import GenreFiled from "./GenreFiled/GenreFiled";


export interface initialValuesType  { 
  name: String , 
  moving: String,
  release: String
  description: String
  genre: Array<string> | null
  country: String
  cast: String
  director: String
  picture:any,
  time:string 
}


const UploadFilms: FC = () => {
  const [button, setButton] = useState(true);
  const dispatch = useDispatch();
  const [form, setForm] = useState("");
  const { loading } = useTypedSelector((state) => state.filmProfile);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { errorMessage } = useTypedSelector(
    (state) => state.filmProfile
  );

  if (errorMessage) {
    const key = "updatable";
    message.error({ content: errorMessage, key, duration: 3 });
    dispatch(setError(""));
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const field =(values:initialValuesType):Array<{id:string,name:string,value:string,component:any}>=>{
    return [
     {id:'1',name:"picture",value:values.picture,component:PicturesWall}, 
     {id:'2',name:"name",value:values.name,component:TextFieldForm}, 
     {id:'3',name:"moving",value:values.moving,component:TextFieldForm}, 
     {id:'4',name:"release",value:values.release,component:TextFieldForm}, 
     {id:'5',name:"description",value:values.description,component:TextFieldMultilineForm}, 
     {id:'6',name:"genre",value:values.genre,component:GenreFiled}, 
     {id:'7',name:"country",value:values.country,component:TextFieldForm}, 
     {id:'8',name:"cast",value:values.cast,component:TextFieldForm}, 
     {id:'9',name:"director",value:values.director,component:TextFieldForm}, 
     {id:'10',name:"time",value:values.time,component:TextFieldForm}, 
   ]
   }

  return (
    <div>
      <div className={style.control}>
        <Button onClick={() => { setForm("Upload");  showModal() }} variant="outlined" color="primary">
          Добавить фильм
        </Button>
        <Button onClick={() => { showModal(); setForm("Update")}} variant="outlined" color="primary">
          Внести поправки к фильму
        </Button>
      </div>
      <Modal title="Добавить фильм" visible={isModalVisible} footer={null} onCancel={handleCancel}>
        {loading ? (
          <Loader />
        ) : form == "Upload" ? (
          <FormUpload field={field}/>
        ) : (
          <FormUpdate field={field} setButton={setButton} button={button} />
        )}
      </Modal>
    </div>
  );
};

export default UploadFilms;
