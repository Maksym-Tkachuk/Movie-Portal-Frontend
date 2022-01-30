import { FC } from "react";
import style from "./Movie.module.scss";


type Movie = {
  img: string;
  name: string;
  year: string;
  time: string;
};

const Movie: FC<Movie> = ({img,name,year,time}) => {
  return (
    <div className={style.movie}>
      <img src={img} alt="" />
      <p>{name}</p>
      <p>
        <span>{year}</span>
        <span>{`${time}минут`}</span>
      </p>
    </div>
  );
};

export default Movie;
