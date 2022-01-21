import { FC } from "react";
import style from "./MovieComponent.module.scss";

interface FilmProfileType {
  img: string;
  title: string;
}

const ControlPanel: FC<FilmProfileType> = (props) => {
  return (
    <div className={style.control_panel}>
      <img src={props.img} alt="" />
      <p>{props.title}</p>
    </div>
  );
};

export default ControlPanel;
