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

export interface initialStateType {
  film: initialFilmType;
  loading: boolean;
  errorMessage?:string
  result?:boolean
}

export enum actionType {
  SET_INFORMATION_ABOUT_FILM = "SET-INFORMATION-ABOUT-FILM",
  SET_LOADING = "SET-LOADING",
  SET_ERROR = "SET-ERROR",
  SET_RESULT = "SET-RESULT",
  DELETE_FILM = "DELETE_FILM"
}

export interface SetInformationAboutFilm {
  type: typeof actionType.SET_INFORMATION_ABOUT_FILM;
  payload: initialFilmType;
}

export interface SetLoading {
  type: actionType.SET_LOADING;
  payload: boolean;
}
export interface SetError {
  type: actionType.SET_ERROR;
  payload: string;
}
export interface SetResult {
  type: actionType.SET_RESULT;
  payload: boolean;
}

export interface DeleteFilm {
  type: actionType.DELETE_FILM;
}
export type filmActionType = SetInformationAboutFilm | SetLoading | SetError | SetResult | DeleteFilm; 