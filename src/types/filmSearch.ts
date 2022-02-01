import { FilmResponce } from "../models/response/FilmGenreResponce";

export type initialfilmSearchState = {
  filmSearch: Array<FilmResponce>;
  loading: boolean;
  message: string;
};

export enum actionType {
  SET_FILM_SEARCH = "SET-FILM-SEARCH",
  SET_LOADING_SEARCH = "SET-LOADING-SEARCH",
  SET_MESSAGE = "SET-MESSAGE",
}

export type SetFilmSearch =  {
  type:  actionType.SET_FILM_SEARCH;
  payload:  Array<FilmResponce>;
};
export type SetLoadingSearch =  {
  type:  actionType.SET_LOADING_SEARCH;
  payload: boolean;
};

export type SetMessage =  {
  type:  actionType.SET_MESSAGE;
  payload: string;
};



export type filmSearchActionType = SetFilmSearch | SetLoadingSearch | SetMessage