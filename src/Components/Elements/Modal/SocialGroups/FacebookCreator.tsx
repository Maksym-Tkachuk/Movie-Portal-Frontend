import { FC } from "react";
import FacebookLogin from "react-facebook-login";
import face from "../../../../img/icon_for_registration/facebook.jpg"
import "./SocialGropus.scss";
type FacebookCreatorTypes = {
    callback: (response: any) => any;
    textButton:string
  };

export const FacebookCreator: FC<FacebookCreatorTypes> = (props) => {
  return (
    <FacebookLogin
      appId="425499619260395"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.callback}
      textButton = {props.textButton}
      icon="fa-facebook"
    />
  );
};