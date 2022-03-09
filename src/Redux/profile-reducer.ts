import { Dispatch } from "react";
import ProfileService from "../Service/ProfileService";
import {
  actionType,
  SetAvatarImg,
  SetAvatarLoading,
  userAvatarActionType,
} from "../types/userAvatar";

let initialState = {
  userAvatar: "",
  loading:false
};

type InitialStateType = typeof initialState;

const profileReducer = (
  state: InitialStateType = initialState,
  action: userAvatarActionType
) => {
  switch (action.type) {
    case actionType.SET_AVATAR_IMG:
      return {
        ...state,
        userAvatar: action.avatar,
      };
      case actionType.SER_AVATAR_LOADING:
        return {
          ...state,
          loading: action.payload
        };
    default:
      return state;
  }
};

export const setAvatar = (avatar: string): SetAvatarImg => ({
  type: actionType.SET_AVATAR_IMG,
  avatar,
});

export const setLoading = (turn: boolean): SetAvatarLoading => ({
  type: actionType.SER_AVATAR_LOADING,
  payload:turn,
});

export const userAvatar =
  (file: string) => async (dispatch: Dispatch<userAvatarActionType>) => {
    try {
      dispatch(setLoading(true)) 
      const formData = new FormData();
      formData.append("img", file);
      const responce = await ProfileService.changeAvatar(formData);
      dispatch(setAvatar(responce.data.avatar));
      console.log(responce.data)
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }finally{
      dispatch(setLoading(false)) 
    }
  };

export default profileReducer;
