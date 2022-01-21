import { type } from "os"
import { useContext } from "react"
import { ModalContext } from "../Modal/ModalContext"
import style from "./ButtonSquare.module.scss"

type ButtonSquareType={
    text:string
    big?:boolean
}


export const ButtonSquare = (props:ButtonSquareType) => {

    const modalWindow = useContext(ModalContext)
    return (
        <div className={props.big ? style.buttonBig : style.button}  onClick={() => !props.big && modalWindow.setActive(true)}>
            <span className={style.text} onClick={() => modalWindow.setActive(true)}>
                {props.text}
            </span>
        </div>
    )
}
