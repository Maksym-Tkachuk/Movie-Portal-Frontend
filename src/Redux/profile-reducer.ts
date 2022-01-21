import { Dispatch } from "react";
import ProfileService from "../Service/ProfileService";
import {
  actionType,
  SetAvatarImg,
  userAvatarActionType,
} from "../types/userAvatar";

let initialState = {
  userAvatar: "",
};

type InitialStateType = typeof initialState;

const profileReducer = (
  state: InitialStateType = initialState,
  action: any
) => {
  switch (action.type) {
    case actionType.SET_AVATAR_IMG:
      return {
        ...state,
        userAvatar: action.avatar,
      };
    default:
      return state;
  }
};

export const setAvatar = (avatar: string): SetAvatarImg => ({
  type: actionType.SET_AVATAR_IMG,
  avatar,
});

export const userAvatar =
  (file: string) => async (dispatch: Dispatch<userAvatarActionType>) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const responce = await ProfileService.changeAvatar(formData);
      dispatch(setAvatar(responce.data.avatar));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };

export default profileReducer;
