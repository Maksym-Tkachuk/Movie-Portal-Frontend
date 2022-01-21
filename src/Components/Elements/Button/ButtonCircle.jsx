import style from "./ButtonCircle.module.scss"




export const ButtonCircle = (props) => {
    let styleBtn = props.active ? `${style.button} ${style.active}` : style.button
    



    return (
        <div onClick={() => { props.setActiveButton(props.value) }}
            className={ styleBtn }


        >
            <span className={style.text}>
                {props.text}
            </span>
        </div>
    )
}