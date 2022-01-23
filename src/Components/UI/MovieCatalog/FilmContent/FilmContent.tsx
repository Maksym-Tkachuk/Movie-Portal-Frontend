import { NavLink } from "react-router-dom";
import s from "./FilmContent.module.scss";
import "./FilmContent.scss";
import { useNavigate } from "react-router";
import { API_URL_IMG } from "../../../../http/api";
import { FilmResponce } from "../../../../models/response/FilmGenreResponce";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface FilmContentType {
  films?: Array<FilmResponce>;
  title?: string;
  type?: string;
}

const FilmContent = (props: FilmContentType) => {
  const router = useNavigate();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  let images = props.films?.map((elem) => {
    return (
      <NavLink className={s.film_picture}  to={"/main/" + props.type + "/" + elem._id}  key={elem._id}>
        <img src={`${API_URL_IMG}/${elem.picture}`} alt="" />
      </NavLink>
    );
  });

  return (
    <section className={s.FilmContent}>
      <div className={s.FilmContent__Inner}>
        <div
          className={s.FilmContent__name}
          onClick={() => router(`/main/${props.type}`)}
        >
          {props.title}
        </div>
  
      
        <Slider className={s.arrow} {...settings}>
             {images}
          </Slider>

      </div>
    </section>
  );
};

export default FilmContent;
