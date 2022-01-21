import { FilmResponce } from "../models/response/FilmGenreResponce";

export type initialStateType = {
  films:Array<FilmResponce> ,
  loading:boolean,
}

export enum actionType {
  SET_INFORMATION_ABOUT_FILMS  = "SET-INFORMATION-ABOUT-FILMS",
  SET_LOADING = "SET-LOADING",

}

export interface SetInformationAboutFilm {
  type: typeof actionType.SET_INFORMATION_ABOUT_FILMS;
  payload:Array<FilmResponce>;
}

export interface SetLoading {
  type: actionType.SET_LOADING;
  payload: boolean;
}

export type filmCatalogActionType = SetInformationAboutFilm | SetLoading; 
