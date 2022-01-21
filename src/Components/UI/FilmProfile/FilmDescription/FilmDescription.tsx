import { FC } from "react";
import style from "./FilmDescription.module.scss";
import { Rate } from "antd";
import qualityFilm from "../../../../img/icon_for_film/hd.png";
import film from "../../../../img/Action/tomorrwWar.jpg";
import CountryFlags from "./CountryFlags";

const FilmDescription: FC = (props) => {
  return (
    <div className={style.all_infoemation}>
      <div className={style.description}>
        <img src={film} alt="" />
        <div className={style.film_description}>
          <div className={style.name_film}>The Tomorrow War</div>
          <div className={style.film_characteristiv}>
            <span>
              <img src={qualityFilm} alt="" />
            </span>
            <span className={style.rating}>
              <Rate onChange={(e) => console.log(e)} />
              <span>6.6</span>
            </span>
            <span>138 минут</span>
          </div>
          <div className={style.about_film}>
            The world is stunned when a group of time travelers arrive from the
            year 2051 to deliver an urgent message: Thirty years in the future,
            mankind is losing a global war against a deadly alien species. The
            only hope for survival is for soldiers and civilians from the
            present to be transported to the future and join the fight. Among
            those recruited is high school teacher and family man Dan Forester
            (Chris Pratt). Determined to save the world for his young daughter,
            Dan teams up with a brilliant scientist (Yvonne Strahovski) and his
            estranged father (J.K. Simmons) in a desperate quest to rewrite the
            fate of the planet....
          </div>
        </div>
      </div>
      <div className={style.additional_information}>
        <div className={style.county_name}>
          <span>United States</span>
          <CountryFlags country="США" />
        </div>
        <div className={style.film_information}>
          <div className={style.film_fileds}>
            <p>Жанр:</p>
            <p>Год:</p>
            <p>Режиссер:</p>
            <p>Aктеры:</p>
          </div>
          <div className={style.decription_fileds}>
            <p>Sci-Fi, Adventure, Action</p>
            <p>2021-07-02</p>
            <p>Chris McKay</p>
            <p>Yvonne Strahovski, Chris</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDescription;
