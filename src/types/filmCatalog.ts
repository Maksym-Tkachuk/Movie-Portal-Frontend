import { FilmResponce } from "../models/response/FilmGenreResponce";

export type initialStateType = {
  films: Array<FilmResponce>;
  loading: boolean;
  filmsGenre: Array<FilmResponce>;
  loadingNewFilm: boolean;
  loadingCatalogFilm: boolean;
};

export enum actionType {
  SET_INFORMATION_ABOUT_FILMS = "SET-INFORMATION-ABOUT-FILMS",
  SET_LOADING = "SET-LOADING",
  SET_INFORMATION_ABOUT_FILMS_GENRE = "SET-INFORMATION-ABOUT-FILMS-GENRE",
  SET_NEW_FILMS = "SET_NEW_FILMS",
  SET_LOADING_NEW_FILM = "SET-LOADING-NEW-FILM",
  SET_LOADING_CATALOG_FILM = "SET_LOADING_CATALOG_FILM",
}

export interface SetInformationAboutFilm {
  type: actionType.SET_INFORMATION_ABOUT_FILMS;
  payload: Array<FilmResponce>;
}

export interface SetInformationAboutFilmGenre {
  type: actionType.SET_INFORMATION_ABOUT_FILMS_GENRE;
  payload: Array<FilmResponce>;
}

export interface SetNewFilms {
  type: actionType.SET_NEW_FILMS;
  payload: Array<FilmResponce>;
}

export interface SetLoading {
  type: actionType.SET_LOADING;
  payload: boolean;
}
export interface SetLoadingCatalogFilm {
  type: actionType.SET_LOADING_CATALOG_FILM;
  payload: boolean;
}

export interface SetLoadingNewFilm {
  type: actionType.SET_LOADING_NEW_FILM;
  payload: boolean;
}

export type filmCatalogActionType =
  | SetInformationAboutFilm
  | SetLoading
  | SetInformationAboutFilmGenre
  | SetNewFilms
  | SetLoadingNewFilm
  | SetLoadingCatalogFilm
