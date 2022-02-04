import { FC } from "react";
import ReactPlayer from "react-player";
import play from "../../../../img/icon_for_film/PlayButtom.png";
import tv_button from "../../../../img/icon_for_film/tv_button.svg";
import play_button from "../../../../img/icon_for_film/playButton.svg";
import style from "./MovieComponent.module.scss";
import ControlPanel from "./ControlPanel";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import Loader from "../../../Elements/Loader/Loader";

interface FilmProfileType {
  movie:any
}





const MovieComponent: FC<FilmProfileType> = ({movie}) => {


  
  return (
    <div>
    <ReactPlayer
        className={style.video}
        playIcon={<img src={play} />}
        light
        controls
        url={movie}
      />
      {/* <div className={style.control_block}>
        <ControlPanel img={tv_button} title="VidCloud" />
        <ControlPanel img={play_button} title="HDRip" />
        <ControlPanel img={play_button} title="Videovard" />
        <ControlPanel img={play_button} title="Dosteam" />
        <ControlPanel img={play_button} title="Vidstem" />
      </div> */}
    </div>
  );
};

export default MovieComponent;
