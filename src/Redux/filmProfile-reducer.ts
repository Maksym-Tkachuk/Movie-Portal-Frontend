import { Dispatch } from "redux";
import FilemService from "../Service/FilmService";
import { actionType, filmActionType, initialFilmType, initialStateType, moviesYouLike, SetInformationAboutFilm, SetLoading, SetMoviesYouLike } from "../types/profileFilm";



let initialState: initialStateType = {
  film: {
    _id: "",
    name: "",
    description: "",
    moving: "",
    picture: "",
    country: "",
    time: "",
    rating: 0,
    genre: [],
    release: 0,
    director: "",
    cast: "",
  },
  loading: false,
  loadingFilmsLike:false,
  moviesYouLike:[{
    _id:"",
    genre:[""],
    name:"",
    picture:"",
    release:0,
    time:""
  }]
};


const filmProfileReducer = (
  state = initialState,
  action: filmActionType
): initialStateType => {
  switch (action.type) {
    case actionType.SET_PROFILE_FILM:
      return {
        ...state,
        film: { ...action.payload },
      };
    case actionType.SET_LOADING_PROFILE_FILM:
      return {
        ...state,
        loading: action.payload,
      };
      case actionType.SET_MOVIES_YOU_LIKE:
        return {
          ...state,
          moviesYouLike: [...action.payload],
        };
    default:
      return state;
  }
};

export const setFilm = (film: initialFilmType): SetInformationAboutFilm => ({
  type: actionType.SET_PROFILE_FILM,
  payload: { ...film },
});
export const setMoviesYouLike = (films:Array<moviesYouLike> ): SetMoviesYouLike => ({
  type: actionType.SET_MOVIES_YOU_LIKE,
  payload: films,
});
export const setLoading = (value: boolean): SetLoading => ({
  type: actionType.SET_LOADING_PROFILE_FILM,
  payload: value,
});
export const setLoadingFilmsLike = (value: boolean): SetLoading => ({
  type: actionType.SET_LOADING_PROFILE_FILM,
  payload: value,
});




export const findFilById = (id: string | undefined) => async (dispatch: Dispatch<filmActionType>) => {
    try {
      dispatch(setLoading(true));
      const response = await FilemService.findFilmById(id);
      dispatch(setFilm(response.data));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  export const getMoviesLike = (geners:Array<string>,limit:number) => async (dispatch: Dispatch<filmActionType>) => {
    try {
      dispatch(setLoadingFilmsLike(true));
      const response = await FilemService.getFilmGenre(geners,limit);
      //@ts-ignore
      dispatch(setMoviesYouLike(response.data));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      dispatch(setLoadingFilmsLike(false));
    }
  };

export default filmProfileReducer;
