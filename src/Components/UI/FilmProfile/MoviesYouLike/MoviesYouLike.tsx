import { FC } from "react";
import style from "./MoviesYouLike.module.scss";
import film from "../../../../img/K-Drama/guard.jpg";
import Movie from "./Movie/Movie";

const MoviesYouLike: FC = () => {
  return (
    <div className={style.like_movies}>
      <div className={style.title}>Другие фильмы</div>
      <hr className={style.line} />
      <div className={style.movies}>
        <Movie time="124"  name="Hitman wife’.." img={film} year="2021"/>
        <Movie time="124"  name="Hitman wife’.." img={film} year="2021"/>
        <Movie time="124"  name="Hitman wife’.." img={film} year="2021"/>
        <Movie time="124"  name="Hitman wife’.." img={film} year="2021"/>
        <Movie time="124"  name="Hitman wife’.." img={film} year="2021"/>
        <Movie time="124"  name="Hitman wife’.." img={film} year="2021"/>
      </div>
    </div>
  );
};

export default MoviesYouLike;
