import style from "./ModalWindow.module.scss"

import { ButtonCircle } from "../Button/ButtonCircle"
import facebook from "../../../img/icon_for_registration/facebook.jpg"
import search from "../../../img/icon_for_registration/search.jpg"
import twitter from "../../../img/icon_for_registration/twitter.jpg"
import { NavLink } from "react-router-dom"
import UserSearchForm from "./UserSearchForm/UserSearchForm"
import { useSelector } from "react-redux"
import { AppStateType } from "../../../Redux/store"
import { FC, useContext } from "react"
import { ModalContext, ModalStatus } from "./ModalContext"








type ModalWindowType = {
    active:boolean
    setActive: (value:boolean)=>void,
    activeButton:string
    setActiveButton:(value:string)=>void
}



export const ModalWindow:FC  = () => { 

    const modalWindow:ModalWindowType = useContext(ModalContext)

    console.log(modalWindow)
    let auth = useSelector((state:AppStateType) => state.auth);


    return (
        <div className={modalWindow.active ? `${style.modal} ${style.active}` : style.modal} onClick={() => modalWindow.setActive(false)}  >
            <div className={modalWindow.active ? `${style.modal__content} ${style.active}` : style.modal__content} onClick={(e) => e.stopPropagation()} >
          <div className={style.content__inner}>
  <div className={style.rgistratin_button}>
                <ButtonCircle text = {'Sign in'} 
                setActiveButton ={modalWindow.setActiveButton} 
                active={modalWindow.activeButton=="SignIn"?true:false}
                value={'SignIn'}
                />
                <ButtonCircle 
                text = {'Sign up'} 
                setActiveButton ={modalWindow.setActiveButton} 
                active={modalWindow.activeButton=="SignUp"?true:false}
                value={'SignUp'}
                />
           </div>
           {modalWindow.activeButton=="SignIn"
           ?<UserSearchForm  status={modalWindow.activeButton}  errorLogin={auth.errorLogin} />
           :<UserSearchForm  status={modalWindow.activeButton} errorLogin={auth.errorLogin}  />}  
                <span>Or</span>
                <div className={style.social_groups}>
                     <NavLink to="/facebook">
                         <img src={facebook}/>
                     </NavLink>
                     <NavLink to="/search">
                         <img src={search}/>
                     </NavLink>
                     <NavLink to="/twitter">
                         <img src={twitter}/>
                     </NavLink>
                </div>
            </div>
          </div>
         
        </div>
    )
}



