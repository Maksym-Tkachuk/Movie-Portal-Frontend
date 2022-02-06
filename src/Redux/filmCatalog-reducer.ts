import { Dispatch } from "redux";
import { FilmResponce } from "../models/response/FilmGenreResponce";
import FilemService from "../Service/FilmService";
import { actionType, filmCatalogActionType, initialStateType, SetInformationAboutFilm, SetInformationAboutFilmGenre, SetLoading, SetLoadingCatalogFilm, SetLoadingNewFilm, SetNewFilms } from "../types/filmCatalog";



let initialState:initialStateType = {
  films: [],
  filmsGenre:[],
  loading: false,
  loadingNewFilm:false,
  loadingCatalogFilm:false
};



const filmCatalog = (
  state = initialState,
  action: filmCatalogActionType
): initialStateType => {
  switch (action.type) {
    case actionType.SET_INFORMATION_ABOUT_FILMS:
      return {
        ...state,
        films:[...state.films,...action.payload.filter(({name})=> !state.films.some(second=>second.name == name))]
      };

    case actionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
      case actionType.SET_LOADING_NEW_FILM:
        return {
          ...state,
          loadingNewFilm: action.payload,
        };
        case actionType.SET_LOADING_CATALOG_FILM:
          return {
            ...state,
            loadingCatalogFilm: action.payload,
          };
      case actionType.SET_INFORMATION_ABOUT_FILMS_GENRE:
        return {
          ...state,
          filmsGenre:[...action.payload]
        };
        case actionType.SET_NEW_FILMS:
          return {
            ...state,
            filmsGenre:[...state.filmsGenre,...action.payload.filter(({name})=> !state.filmsGenre.some(second=>second.name == name))]
          };
    default:
      return state;
  }
};

export const setFilms = (films: Array<FilmResponce>): SetInformationAboutFilm => ({
  type: actionType.SET_INFORMATION_ABOUT_FILMS,
  payload: films,
});
export const setFilmsGenre = (films: Array<FilmResponce>): SetInformationAboutFilmGenre => ({
  type: actionType.SET_INFORMATION_ABOUT_FILMS_GENRE,
  payload: films,
});
export const setNewFilms = (films: Array<FilmResponce>): SetNewFilms => ({
  type: actionType.SET_NEW_FILMS,
  payload: films,
});
export const setLoading = (value: boolean): SetLoading => ({
  type: actionType.SET_LOADING,
  payload: value,
});
export const setLoadingNewFilm = (value: boolean): SetLoadingNewFilm => ({
  type: actionType.SET_LOADING_NEW_FILM,
  payload: value,
});
export const setLoadingCatalogFilm = (value: boolean): SetLoadingCatalogFilm => ({
  type: actionType.SET_LOADING_CATALOG_FILM,
  payload: value,
});





export const getFilms = (geners:Array<any>,limit:number,skipFilm:number) => async (dispatch: Dispatch<filmCatalogActionType>) => {
  try {
    dispatch(setLoadingCatalogFilm(true));
    const response = await FilemService.getFilmGenre(geners,limit,skipFilm);
    dispatch(setFilms(response.data));
  } catch (e: any) {
    console.log(e.response?.data?.message);
  } finally {
    dispatch(setLoadingCatalogFilm(false));
  }
};
export const addNewSlide = (geners:Array<any>,limit:number,skipFilm:number) => async (dispatch: Dispatch<filmCatalogActionType>) => {
  try {
    dispatch(setLoadingCatalogFilm(true));
    const response = await FilemService.getFilmGenre(geners,limit,skipFilm);
    dispatch(setFilms(response.data));
  } catch (e: any) {
    console.log(e.response?.data?.message);
  } finally {
    dispatch(setLoadingCatalogFilm(false));
  }
};

export const getFilmsGenre = (geners:Array<any>,limit:number,skipFilm:number) => async (dispatch: Dispatch<filmCatalogActionType>) => {
  try {
    dispatch(setLoading(true));
    const response = await FilemService.getFilmGenre(geners,limit,skipFilm);
    dispatch(setFilmsGenre(response.data));
  } catch (e: any) {
    console.log(e.response?.data?.message);
  } finally {
    dispatch(setLoading(false));
  }
};

export const addFilmsGenre = (geners:Array<any>,limit:number,skipFilm:number) => async (dispatch: Dispatch<filmCatalogActionType>) => {
  try {
    dispatch(setLoading(true));
    const response = await FilemService.getFilmGenre(geners,limit,skipFilm);
    dispatch(setNewFilms(response.data));
  
    if(response.data.length==0){
      dispatch(setLoadingNewFilm(true));
    }
  } catch (e: any) {
    console.log(e.response?.data?.message);
  } finally {
    dispatch(setLoading(false));
  }
};





export default filmCatalog;
