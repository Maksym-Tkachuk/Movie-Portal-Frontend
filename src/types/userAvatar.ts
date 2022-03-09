export enum actionType {
  SET_AVATAR_IMG = "SET-AVATAR-IMG",
  SER_AVATAR_LOADING = "SER_AVATAR_LOADING",
}

export interface SetAvatarImg {
  type: actionType.SET_AVATAR_IMG;
  avatar: string;
}

export interface SetAvatarLoading {
  type: actionType.SER_AVATAR_LOADING;
  payload: boolean;
}
export type userAvatarActionType = SetAvatarImg | SetAvatarLoading;
