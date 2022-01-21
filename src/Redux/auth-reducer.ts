import axios from "axios";
import { Dispatch } from "react";
import { API_URL } from "../http/api";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/User";
import AuthService from "../Service/AuthService";
import { actionType, authActionType, SetErrorLogin, SetErrorRegistration, SetIsAuth, SetIsLoadingLogReag, SetLoading, SetUser } from "../types/auth";
import { setAvatar } from "./profile-reducer";



let initialState = {
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
  isLoadingLogReg: false,
  errorLogin: "",
  errorRegistration: "",
};

export type InitialStateType = typeof initialState;

const authReducer = (state: InitialStateType = initialState, action: authActionType) => {
  switch (action.type) {
    case actionType.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.loading,
      };
    case actionType.SET_ERROR_LOGIN:
      return {
        ...state,
        errorLogin: action.errorLogin,
      };
    case actionType.SET_ERROR_REGISTRATION:
      return {
        ...state,
        errorRegistration: action.errorRegistration,
      };
    case actionType.SET_IS_LOADING_LOGR_REG:
      return {
        ...state,
        isLoadingLogReg: action.loading,
      };

    default:
      return state;
  }
};

export const setAuth = (isAuth: boolean):SetIsAuth => ({ type: actionType.SET_IS_AUTH, isAuth });
export const setUser = (user: IUser):SetUser => ({ type: actionType.SET_USER, user });
export const setLoading = (loading: boolean):SetLoading => ({
  type: actionType.SET_LOADING,
  loading,
});
export const setErrorLogin = (errorLogin: string):SetErrorLogin=> ({
  type: actionType.SET_ERROR_LOGIN,
  errorLogin,
});
export const setErrorRegistration = (errorRegistration: string):SetErrorRegistration => ({
  type: actionType.SET_ERROR_REGISTRATION,
  errorRegistration,
});
export const setIsLoadingLogReag = (loading: boolean):SetIsLoadingLogReag => ({
  type: actionType.SET_IS_LOADING_LOGR_REG,
  loading,
});

export const login =
  (email: string, password: string) => async (dispatch:Dispatch<authActionType>) => {
    dispatch(setIsLoadingLogReag(true));
    try {
      let response = await AuthService.login(email, password);

      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("tokenRefresh", response.data.refreshToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
      dispatch(setAvatar(response.data.user.avatar));
    } catch (e: any) {
      console.log(e.response?.data?.message);
      dispatch(setErrorLogin(e.response?.data?.message));
    } finally {
      dispatch(setIsLoadingLogReag(false));
    }
  };

export const registration =
  (email: string, password: string, userName: string) =>
  async (dispatch:Dispatch<authActionType>) => {
    dispatch(setIsLoadingLogReag(true));
    try {
      let response = await AuthService.registration(email, password, userName);

      console.log(response.data);

      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("tokenRefresh", response.data.refreshToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
      dispatch(setAvatar(response.data.user.avatar));
    } catch (e: any) {
      console.log(e.response?.data?.message);
      dispatch(setErrorRegistration(e.response?.data?.message));
    } finally {
      dispatch(setIsLoadingLogReag(false));
    }
  };

export const logout = () => async (dispatch:Dispatch<authActionType>) => {
  dispatch(setIsLoadingLogReag(true));
  try {
    await AuthService.logout();
    localStorage.removeItem("token");
    localStorage.removeItem("tokenRefresh");
    dispatch(setAuth(false));
    dispatch(setUser({} as IUser));
  } catch (e: any) {
    console.log(e.response?.data?.message);
  } finally {
    dispatch(setIsLoadingLogReag(false));
  }
};

export const chekAuth = () => async (dispatch:Dispatch<authActionType>) => {
  dispatch(setLoading(true));
  try {
   
    const response = await axios.get<AuthResponse>(`${API_URL}/refresh?token=${localStorage.getItem('tokenRefresh')}`, {
      withCredentials: true,
    });
    
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem("tokenRefresh", response.data.refreshToken);
    dispatch(setAuth(true));
    dispatch(setUser(response.data.user));
    dispatch(setAvatar(response.data.user.avatar));
  } catch (e: any) {
    console.log(e.response?.data?.message);
  } finally {
    dispatch(setLoading(false));
  }
};

export default authReducer;
