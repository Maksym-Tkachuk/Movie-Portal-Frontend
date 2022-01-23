import { Dispatch } from "redux";
import { FilmResponce } from "../models/response/FilmGenreResponce";
import FilemService from "../Service/FilmService";
import { actionType, filmCatalogActionType, initialStateType, SetInformationAboutFilm, SetLoading } from "../types/filmCatalog";



let initialState = {
  films: [{
    _id: "string",
  name: "string",
  picture:"",
  time:0,
  genre:[""],
  release:""
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
        films: [...action.payload],
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

export const setFilms = (films: Array<FilmResponce>): SetInformationAboutFilm => ({
  type: actionType.SET_INFORMATION_ABOUT_FILMS,
  payload: films,
});
export const setLoading = (value: boolean): SetLoading => ({
  type: actionType.SET_LOADING,
  payload: value,
});





export const getFilms = (geners:Array<string>,limit:number) => async (dispatch: Dispatch<filmCatalogActionType>) => {
  try {
    dispatch(setLoading(true));

    const response = await FilemService.getFilmGenre(geners,limit);
    console.log(response.data);
    dispatch(setFilms(response.data));
  } catch (e: any) {
    console.log(e.response?.data?.message);
  } finally {
    dispatch(setLoading(false));
  }
};









export default filmCatalog;
