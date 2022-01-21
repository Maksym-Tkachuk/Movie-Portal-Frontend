import FilemService from "../Service/FilmService";


let SET_INFORMATION_ABOUT_FILM = "SET-INFORMATION-ABOUT-FILM";
const SET_FILES = "SET_FILES"

type  initialStateType =  {
    files: Array<any>;
    currentDir: string;
    popupDisplay: string;
    dirStack: Array<any>;
}



let initialState:initialStateType = {
  files: [
    {
        "_id": "61cd8ee6a323e80cc0d82f0d",
        "name": "war",
        "type": "dir",
        "size": 0,
        "path": "war",
        "user": "61cca4446022e76ad2083515",
        "childs": [],
        "__v": 0
    }
],
  currentDir: "",
  popupDisplay: "",
  dirStack: [],
};

// type InitialStateType = typeof initialState;

const filemInformationReducer = (
  state: initialStateType = initialState,
  action: any
) => {
  switch (action.type) {
    case SET_INFORMATION_ABOUT_FILM:
      return {
        ...state,
        files: [...state.files, action.payload],
      };
      case SET_FILES: 
      return {...state, files: action.payload}
    default:
      return state;
  }
};

export const addFile = (file: any) => ({
  type: SET_INFORMATION_ABOUT_FILM,
  payload: file,
});


export const setFiles = (files:any) => ({type: SET_FILES, payload: files})







export const addFilem =
  (file: any, dirId: string) => async (dispatch: any) => {
   
    try {
        const formData = new FormData()
        formData.append('file', file)
        if (dirId) {
            formData.append('parent', dirId)
        }
      const response = await FilemService.addFilm(formData);
      dispatch(addFile(response.data));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };


  export const getFilem = (dirId:string)=> async (dispatch:any)=>{
      try{
        const response = await FilemService.getFilm()
        dispatch(setFiles(response.data))

      }catch(e:any){
        console.log(e.response?.data?.message);
      }
  }

  export const downloadFile = (file:any) => async (dispatch:any)=>{
    const response = await fetch(`http://localhost:5000/api/files/download?id=${file._id}`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    if (response.status === 200) {
        const blob = await response.blob()
        const downloadUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = file.name
        document.body.appendChild(link)
        link.click()
        link.remove()
    }
}



export default filemInformationReducer;
