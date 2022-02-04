export interface initialFilmType {
  name: String;
  description: String;
  moving: String;
  picture: String;
  country: String;
  time: string;
  rating: number;
  genre: Array<string> ;
  release: Number;
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
        release: Number;
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
  SET_MOVIES_YOU_LIKE="SET-MOVIES-YOU-LIKE",
  SET_MOVIE_RATING="SET-MOVIE-RATING"
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

export interface SetMovieRating {
  type: actionType.SET_MOVIE_RATING;
  payload: number;
}

export type filmActionType = SetInformationAboutFilm | SetLoading | SetMoviesYouLike | SetMovieRating; 
