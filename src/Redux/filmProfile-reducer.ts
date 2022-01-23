import { Dispatch } from "redux";
import FilemService from "../Service/FilmService";
import {filmActionType, actionType,initialStateType,initialFilmType,SetInformationAboutFilm,SetLoading} from "./../types/film";

let initialState: initialStateType = {
  film: {
    _id: "",
    name: "",
    description: "",
    moving: "",
    picture: "",
    country: "",
    time: "",
    rating: "",
    genre: [],
    release: "",
    director: "",
    cast: "",
  },
  loading: false,
};


const filmProfileReducer = (
  state = initialState,
  action: filmActionType
): initialStateType => {
  switch (action.type) {
    case actionType.SET_INFORMATION_ABOUT_FILM:
      return {
        ...state,
        film: { ...action.payload },
      };
    case actionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export const setFilm = (film: initialFilmType): SetInformationAboutFilm => ({
  type: actionType.SET_INFORMATION_ABOUT_FILM,
  payload: { ...film },
});
export const setLoading = (value: boolean): SetLoading => ({
  type: actionType.SET_LOADING,
  payload: value,
});




export const findFilById = (id: string | undefined) => async (dispatch: Dispatch<filmActionType>) => {
    try {
      dispatch(setLoading(true));
      const response = await FilemService.findFilmById(id);
      dispatch(setFilm(response.data));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };



export default filmProfileReducer;
