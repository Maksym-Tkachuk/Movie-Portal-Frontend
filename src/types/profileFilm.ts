export interface initialFilmType {
  name: String;
  description: String;
  moving: String;
  picture: String;
  country: String;
  time: string;
  rating: String;
  genre: Array<string> ;
  release: String;
  director: String;
  cast: String;
  _id: String;
}
export type moviesYouLike={
        _id: string;
        name: string;
        picture: string;
        time: string;
        genre: string[];
        release: string;
}

export interface initialStateType {
  film: initialFilmType;
  loading: boolean;
  moviesYouLike: Array<moviesYouLike>
  loadingFilmsLike:boolean
}

export enum actionType {
  SET_LOADING_PROFILE_FILM = "SET-LOADING-PROFILE-FILM",
  SET_PROFILE_FILM = "SET-PROFILE-FILM",
  SET_MOVIES_YOU_LIKE="SET-MOVIES-YOU-LIKE"
}

export interface SetInformationAboutFilm {
  type: typeof actionType.SET_PROFILE_FILM;
  payload: initialFilmType;
}
export interface SetMoviesYouLike {
  type: typeof actionType.SET_MOVIES_YOU_LIKE;
  payload:Array<moviesYouLike>;
}

export interface SetLoading {
  type: actionType.SET_LOADING_PROFILE_FILM;
  payload: boolean;
}

export type filmActionType = SetInformationAboutFilm | SetLoading | SetMoviesYouLike; 
