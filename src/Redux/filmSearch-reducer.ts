import { Dispatch } from "redux";
import FilemService from "../Service/FilmService";
import img from "../img/K-Drama/18-again.jpg";
import {
  actionType,
  filmSearchActionType,
  initialfilmSearchState,
  SetFilmSearch,
  SetLoadingSearch,
} from "../types/filmSearch";
import { FilmResponce } from "../models/response/FilmGenreResponce";

let initialState: initialfilmSearchState = {
  filmSearch: [],
  loading: false,
  message: "",
};

const filmSearchReducer = (
  state = initialState,
  action: filmSearchActionType
): initialfilmSearchState => {
  switch (action.type) {
    case actionType.SET_FILM_SEARCH:
      return {
        ...state,
        filmSearch: [...action.payload],
      };
    case actionType.SET_LOADING_SEARCH:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export const setFilmSearch = (films: Array<FilmResponce>): SetFilmSearch => ({
  type: actionType.SET_FILM_SEARCH,
  payload: films,
});

export const setLoading = (value: boolean): SetLoadingSearch => ({
  type: actionType.SET_LOADING_SEARCH,
  payload: value,
});

export const getFilmSearch =
  (name: string) => async (dispatch: Dispatch<filmSearchActionType>) => {
    try {
      dispatch(setLoading(true));
      const response = await FilemService.getFilmSearch(name);
      dispatch(setFilmSearch(response.data));
    } catch (e: any) {
      console.log(e);
      console.log(e.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

export default filmSearchReducer;
