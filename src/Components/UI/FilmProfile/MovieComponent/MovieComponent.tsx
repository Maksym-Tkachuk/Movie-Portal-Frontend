import { FC } from "react";
import ReactPlayer from "react-player";
import play from "../../../../img/icon_for_film/PlayButtom.png";
import tv_button from "../../../../img/icon_for_film/tv_button.svg";
import play_button from "../../../../img/icon_for_film/playButton.svg";
import style from "./MovieComponent.module.scss";
import ControlPanel from "./ControlPanel";

interface FilmProfileType {}

const MovieComponent: FC<FilmProfileType> = (props) => {
  return (
    <div>
      <ReactPlayer
        className={style.video}
        playIcon={<img src={play} />}
        light
        controls
        url="https://youtu.be/QPistcpGB8o"
      />
      <div className={style.control_block}>
        <ControlPanel img={tv_button} title="VidCloud" />
        <ControlPanel img={play_button} title="HDRip" />
        <ControlPanel img={play_button} title="Videovard" />
        <ControlPanel img={play_button} title="Dosteam" />
        <ControlPanel img={play_button} title="Vidstem" />
      </div>
    </div>
  );
};

export default MovieComponent;
