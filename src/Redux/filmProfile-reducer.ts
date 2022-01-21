import { Dispatch } from "redux";
import { initialValuesType } from "../Components/UI/UploadFilms/UploadFilms";
import FilemService from "../Service/FilmService";
import {filmActionType, actionType,initialStateType, initialFilmType,SetInformationAboutFilm,SetLoading,SetError,SetResult,DeleteFilm} from "./../types/film";

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
  errorMessage: "",
  result: false,
};

// type InitialStateType = typeof initialState;

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
    case actionType.SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case actionType.SET_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    case actionType.DELETE_FILM:
      return {
        ...state,
        film: { ...initialState.film },
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

export const setError = (error: string): SetError => ({
  type: actionType.SET_ERROR,
  payload: error,
});
export const setResult = (result: boolean): SetResult => ({
  type: actionType.SET_RESULT,
  payload: result,
});

export const deleteFilm = (): DeleteFilm => ({ type: actionType.DELETE_FILM });

export const getFilm = () => async (dispatch: Dispatch<filmActionType>) => {
  try {
    dispatch(setLoading(true));
    const response = await FilemService.getFilm();
    console.log(response.data);
    dispatch(setFilm(response.data));
  } catch (e: any) {
    console.log(e);
    dispatch(setError(e.response?.data?.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addFilm =
  (film: initialValuesType) => async (dispatch: Dispatch<filmActionType>) => {
    try {
      dispatch(setLoading(true));
      const formData = new FormData();
      for (let key in film) {
        //@ts-ignore
        formData.append(key, film[key]);
      }
      const response = await FilemService.addFilm(formData);
      console.log(response.data);
      dispatch(setResult(true));
    } catch (e: any) {
      console.log(e.response?.data?.message);
      dispatch(setError(e.response?.data?.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
export const updateFilm =
  (film: initialValuesType) => async (dispatch: Dispatch<filmActionType>) => {
    try {
      dispatch(setLoading(true));
      const formData = new FormData();
      for (let key in film) {
        //@ts-ignore
        formData.append(key, film[key]);
      }
      const response = await FilemService.updateFilm(formData);
      dispatch(setFilm(response.data));
      console.log(response.data);
      dispatch(setResult(true));
    } catch (e: any) {
      console.log(e.response?.data?.message);
      dispatch(setError(e.response?.data?.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const findFilm =
  (name: string) => async (dispatch: Dispatch<filmActionType>) => {
    try {
      dispatch(setLoading(true));
      const response = await FilemService.findFilm(name);
      dispatch(setFilm(response.data));
    } catch (e: any) {
      console.log(e.response?.data?.message);
      dispatch(setError(e.response?.data?.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const removeFilm =
  (name: string) => async (dispatch: Dispatch<filmActionType>) => {
    try {
      dispatch(setLoading(true));
      await FilemService.deleteFilm(name);
      dispatch(setResult(true));
      dispatch(deleteFilm());
    } catch (e: any) {
      console.log(e.response?.data?.message);
      dispatch(setError(e.response?.data?.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export default filmProfileReducer;
