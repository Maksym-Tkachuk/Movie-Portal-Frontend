import { Dispatch } from "redux";
import { FilmResponce } from "../models/response/FilmGenreResponce";
import FilemService from "../Service/FilmService";
import { actionType, filmCatalogActionType, initialStateType, SetInformationAboutFilm, SetInformationAboutFilmGenre, SetLoading } from "../types/filmCatalog";



let initialState:initialStateType = {
  films: [],
  filmsGenre:[{
    _id: "",
  name: "",
  picture:"",
  time:"0",
  genre:[""],
  release:2000,
  }],
  loading: false,
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
      case actionType.SET_INFORMATION_ABOUT_FILMS_GENRE:
        return {
          ...state,
          filmsGenre:[...action.payload]
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
export const setLoading = (value: boolean): SetLoading => ({
  type: actionType.SET_LOADING,
  payload: value,
});





export const getFilms = (geners:Array<any>,limit:number) => async (dispatch: Dispatch<filmCatalogActionType>) => {
  try {
    dispatch(setLoading(true));
    const response = await FilemService.getFilmGenre(geners,limit);
    dispatch(setFilms(response.data));
  } catch (e: any) {
    console.log(e.response?.data?.message);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getFilmsGenre = (geners:Array<any>,limit:number) => async (dispatch: Dispatch<filmCatalogActionType>) => {
  try {
    dispatch(setLoading(true));
    const response = await FilemService.getFilmGenre(geners,limit);
    dispatch(setFilmsGenre(response.data));
  } catch (e: any) {
    console.log(e.response?.data?.message);
  } finally {
    dispatch(setLoading(false));
  }
};





export default filmCatalog;
