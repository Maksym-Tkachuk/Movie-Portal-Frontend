import style from "./ButtonCircle.module.scss"




export const ButtonCircleLogin = (props) => {

    return (
        <div
            className={`${style.button} ${style.active}`}>
            <span className={style.text}>
                {props.text}
            </span>
        </div>
    )
}
export default ButtonCircleLogin