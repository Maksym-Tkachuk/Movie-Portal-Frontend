import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {  useMemo, useState } from 'react';
import style from '../UploadFilms.module.scss'

export function getBase64(file:any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


interface stateType {
  previewVisible: boolean,
  previewImage: string,
  previewTitle: string,
  fileList: any[],
}


const PicturesWall =(props:any) =>{


  let picture =  props.form.values.picture




  const [state,setState] = useState<stateType>({
    previewVisible: false,
    previewImage: "",
    previewTitle: '',
    fileList:[],
  })



  useMemo(()=>{
    if(picture==""){
      setState({...state,previewVisible: false, previewImage: '', fileList:[],})
    }
  },[picture])

 const  handleCancel = () => setState({...state, previewVisible: false });

 const  handlePreview = async (file:any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setState({...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url),
    });
  };

const  handleChange = ({ fileList }:any) =>{
    setState({...state, fileList })
    picture = {...fileList}
    };

 
    const { previewVisible, previewImage, fileList, previewTitle } = state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );


   const fileUploadHandler = async (event:any)=> {
      const file = event.file;
      console.log(file.originFileObj)
      props.form.values.picture = file.originFileObj
      
    }


    return (
      <>
      <Upload
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={(e)=>{
            handleChange(e)
            fileUploadHandler(e)
          }}
         
          style={{ width: '144px' }}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
       
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="filmAvatar" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
    );
  }


export default PicturesWall