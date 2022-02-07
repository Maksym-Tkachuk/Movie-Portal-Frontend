import { FC, useEffect, useState } from "react";
import style from "./FilmDescription.module.scss";
import { message, Rate } from "antd";
import qualityFilm from "../../../../img/icon_for_film/hd.png";
import CountryFlags from "./CountryFlags";
import { initialFilmType } from "../../../../types/film";
import { useDispatch } from "react-redux";
import { updateRating } from "../../../../Redux/filmProfile-reducer";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";





const FilmDescription: FC<initialFilmType> = (props) => {

const [rating,setRating] = useState<number>()
const {isAuth} = useTypedSelector(state=>state.auth)
const dispatch = useDispatch()

const putRating = ()=>{
  if(!isAuth){
    const key = "updatable";
    message.error({ content: "Что б указать рейтинг, войдите в свой акаунт!", key, duration: 3 });
  }
}

  useEffect(()=>{
    if(isAuth && rating){
        dispatch(updateRating(props._id,rating))
    }
  },[rating])



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
            <span onClick={()=>putRating()}> <Rate allowHalf defaultValue={props.rating}  onChange={(e) => setRating(e)} /></span> 
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
