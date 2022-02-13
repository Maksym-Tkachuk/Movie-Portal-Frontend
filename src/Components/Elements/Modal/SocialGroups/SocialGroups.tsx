import { FC } from "react";
import { useDispatch } from "react-redux";
import { login, registration } from "../../../../Redux/auth-reducer";
import style from "../ModalWindow.module.scss";

import { FacebookCreator } from "./FacebookCreator";
import { GoogleCreator } from "./GoogleCreator";

const SocialGroups: FC<{ button: string }> = (props) => {
  const dispatch = useDispatch();

  const registrationGoogle = (response: any) => {
    dispatch(registration(response.Ju.zv, response.Ba, response.Ju.sf));
  };
  const loginGoogle = (response: any) => {
    dispatch(login(response.Ju.zv, response.Ba));
  };
  const  registrationFacebook= (response: any) => {
    dispatch(registration(response.email, response.id, response.name));
  };
  const loginFacebook = (response: any) => {
    dispatch(login(response.email, response.id));
  };

  return (
    <div className={style.social_groups}>
      {props.button == "SignIn" 
         ? <GoogleCreator onSuccess={loginGoogle} buttonText={"Sign In with Google"} />
         : <GoogleCreator  onSuccess={registrationGoogle}  buttonText={"Sign Up with Google"} />
      }
      { props.button == "SignIn" 
         ? <FacebookCreator callback={loginFacebook} textButton="Sign In with Facebook" />
         :<FacebookCreator callback={registrationFacebook} textButton="Sign Up with Facebook" />
      }
    </div>
  );
};

export default SocialGroups;




