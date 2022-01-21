import React, { FC, ReactText, useContext, useState } from "react";
import { Props } from "react";

type ModalWindowType = {
    active:boolean
    setActive: (value:boolean)=>void,
    activeButton:string
    setActiveButton:(value:string)=>void
}

//@ts-ignore
export const ModalContext = React.createContext({
    active:true,
    setActive:(value:boolean)=>{},
    activeButton:"",
    setActiveButton:(value:string)=>{}
});

export const ModalStatus: FC = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  return (
    <ModalContext.Provider
      value={{ 
        active:modalActive,
        setActive: setModalActive, 
        activeButton:activeButton, 
        setActiveButton:setActiveButton }}
    >
      {children}
    </ModalContext.Provider>
  );
};
