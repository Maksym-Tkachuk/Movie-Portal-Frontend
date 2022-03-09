import { FilmResponce } from "../models/response/FilmGenreResponce";

export type initialfilmSearchState = {
  filmSearch: Array<FilmResponce>;
  loading: boolean;
  error: string;
};

export enum actionType {
  SET_FILM_SEARCH = "SET-FILM-SEARCH",
  SET_LOADING_SEARCH = "SET-LOADING-SEARCH",
  SET_ERROR_SEARCH = "SET_ERROR_SEARCH",
}

export type SetFilmSearch =  {
  type:  actionType.SET_FILM_SEARCH;
  payload:  Array<FilmResponce>;
};
export type SetLoadingSearch =  {
  type:  actionType.SET_LOADING_SEARCH;
  payload: boolean;
};

export type SetError =  {
  type:  actionType.SET_ERROR_SEARCH;
  payload: string;
};



export type filmSearchActionType = SetFilmSearch | SetLoadingSearch | SetError