
import { FC } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ButtonSquare } from "../../Elements/Button/ButtonSquare";
import { ModalContext } from "../../Elements/Modal/ModalContext";
import s from "./Header.module.scss";
import Profile from "./Profile/Profile";






const Header:FC = () => {

const modalWindow = useContext(ModalContext)


const {userName} = useTypedSelector(state=>state.auth.user)
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <div className={s.header__siteLogo}>
          <NavLink to="/main">MoviePortal</NavLink>
        </div>
        <div className={s.header__registration}>
          {userName ? (
            <Profile/>
          ) : (
            <>
             <span onClick={()=>modalWindow.setActiveButton("SignIn")}><ButtonSquare  text={"Sign in"}/></span> 
             <span onClick={()=>modalWindow.setActiveButton("SignUp")}><ButtonSquare  text={"Join"} /></span> 
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
