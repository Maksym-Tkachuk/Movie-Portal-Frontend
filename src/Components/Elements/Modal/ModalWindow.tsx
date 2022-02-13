import style from "./ModalWindow.module.scss";
import { ButtonCircle } from "../Button/ButtonCircle";
import UserSearchForm from "./UserSearchForm/UserSearchForm";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../Redux/store";
import { FC, useContext } from "react";
import { ModalContext } from "./ModalContext";
import SocialGroups from "./SocialGroups/SocialGroups";

type ModalWindowType = {
  active: boolean;
  setActive: (value: boolean) => void;
  activeButton: string;
  setActiveButton: (value: string) => void;
};

export const ModalWindow: FC = () => {
  const modalWindow: ModalWindowType = useContext(ModalContext);
  //   const []

  let auth = useSelector((state: AppStateType) => state.auth);

  return (
    <div
      className={
        modalWindow.active ? `${style.modal} ${style.active}` : style.modal
      }
      onClick={() => modalWindow.setActive(false)}
    >
      <div
        className={
          modalWindow.active
            ? `${style.modal__content} ${style.active}`
            : style.modal__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.content__inner}>
          <div className={style.rgistratin_button}>
            <ButtonCircle
              text={"Sign in"}
              setActiveButton={modalWindow.setActiveButton}
              active={modalWindow.activeButton == "SignIn" ? true : false}
              value={"SignIn"}
            />
            <ButtonCircle
              text={"Sign up"}
              setActiveButton={modalWindow.setActiveButton}
              active={modalWindow.activeButton == "SignUp" ? true : false}
              value={"SignUp"}
            />
          </div>
          {modalWindow.activeButton == "SignIn" ? (
            <UserSearchForm
              status={modalWindow.activeButton}
              errorLogin={auth.errorLogin}
            />
          ) : (
            <UserSearchForm
              status={modalWindow.activeButton}
              errorLogin={auth.errorLogin}
            />
          )}
          <span>Or</span>
    
            <SocialGroups button={modalWindow.activeButton} />
  
        </div>
      </div>
    </div>
  );
};
