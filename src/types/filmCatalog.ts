import { FilmResponce } from "../models/response/FilmGenreResponce";

export type initialStateType = {
  films:Array<FilmResponce>,
  loading:boolean,
  filmsGenre:Array<FilmResponce>,
}

export enum actionType {
  SET_INFORMATION_ABOUT_FILMS  = "SET-INFORMATION-ABOUT-FILMS",
  SET_LOADING = "SET-LOADING",
  SET_INFORMATION_ABOUT_FILMS_GENRE="SET-INFORMATION-ABOUT-FILMS-GENRE"

}

export interface SetInformationAboutFilm {
  type: actionType.SET_INFORMATION_ABOUT_FILMS;
  payload:Array<FilmResponce>;
}

export interface SetInformationAboutFilmGenre {
  type: actionType.SET_INFORMATION_ABOUT_FILMS_GENRE;
  payload:Array<FilmResponce>;
}

export interface SetLoading {
  type: actionType.SET_LOADING;
  payload: boolean;
}

export type filmCatalogActionType = SetInformationAboutFilm | SetLoading | SetInformationAboutFilmGenre; 
