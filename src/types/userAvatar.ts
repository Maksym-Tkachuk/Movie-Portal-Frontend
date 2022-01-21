export enum actionType {
  SET_AVATAR_IMG="SET-AVATAR-IMG"
}


export interface SetAvatarImg{
  type: actionType.SET_AVATAR_IMG;
  avatar: string;
}
export type userAvatarActionType = SetAvatarImg; 
