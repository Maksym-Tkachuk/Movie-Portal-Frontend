import { FC } from "react";
import style from "./FilmDescription.module.scss";
import { Rate } from "antd";
import qualityFilm from "../../../../img/icon_for_film/hd.png";
import CountryFlags from "./CountryFlags";
import { initialFilmType } from "../../../../types/film";





const FilmDescription: FC<initialFilmType> = (props) => {



  
  return (
    <div className={style.all_infoemation}>
      <div className={style.description}>
        <img src={`${props.picture}`} alt="" />
        <div className={style.film_description}>
          <div className={style.name_film}>{props.name}</div>
          <div className={style.film_characteristiv}>
            <span>
              <img src={qualityFilm} alt="" />
            </span>
            <span className={style.rating}>
              <Rate onChange={(e) => console.log(e)} />
              <span>{props.rating}</span>
            </span>
            <span>{props.time} минут</span>
          </div>
          <div className={style.about_film}>
           {props.description}
          </div>
        </div>
      </div>
      <div className={style.additional_information}>
        <div className={style.county_name}>
          <span>{props.country}</span>
          <CountryFlags country={`${props.country}`} />
        </div>
        <div className={style.film_information}>
          <div className={style.film_fileds}>
            <p>Жанр:</p>
            <p>Год:</p>
            <p>Режиссер:</p>
            <p>Aктеры:</p>
          </div>
          <div className={style.decription_fileds}>
            <p>{`${props.genre.join()}`}</p>
            <p>{props.release}</p>
            <p>{props.director}</p>
            <p>{props.cast}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDescription;
