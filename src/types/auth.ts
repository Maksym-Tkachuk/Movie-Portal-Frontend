import { IUser } from "../models/User";

export enum actionType {
  SET_IS_AUTH = "SET-IS-AUTH",
  SET_USER = "SET-USER",
  SET_LOADING = "SET-LOADING",
  SET_ERROR_LOGIN = "SET-ERROR-LOGIN",
  SET_ERROR_REGISTRATION = "SET-ERROR-REGISTRATION",
  SET_IS_LOADING_LOGR_REG = "SET-IS-LOADING-LOGR-REG",
  SET_AVATAR_IMG="SET-AVATAR-IMG"
}

export interface SetIsAuth {
  type: typeof actionType.SET_IS_AUTH
  isAuth:boolean
}
export interface SetUser {
  type: actionType.SET_USER;
  user: IUser;
}
export interface SetLoading {
  type: actionType.SET_LOADING;
  loading: boolean;
}
export interface SetErrorLogin {
  type: actionType.SET_ERROR_LOGIN;
  errorLogin: string;
}
export interface SetErrorRegistration {
  type: actionType.SET_ERROR_REGISTRATION;
  errorRegistration:string
}
export interface SetIsLoadingLogReag {
  type: actionType.SET_IS_LOADING_LOGR_REG;
  loading:boolean
}

export interface SetAvatarImg{
  type: actionType.SET_AVATAR_IMG;
  avatar: string;
}
export type authActionType = SetAvatarImg | SetIsAuth | SetUser | SetLoading | SetErrorLogin | SetErrorRegistration | SetIsLoadingLogReag; 
