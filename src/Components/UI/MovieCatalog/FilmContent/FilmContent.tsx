import { NavLink } from "react-router-dom";
import s from "./FilmContent.module.scss";
import "./FilmContent.scss";
import { useNavigate } from "react-router";
import { FilmResponce } from "../../../../models/response/FilmGenreResponce";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../../../Elements/Loader/Loader";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import Movie from "../../FilmProfile/MoviesYouLike/Movie/Movie";
interface FilmContentType {
  films?: Array<FilmResponce>;
  title?: string;
  type?: string;
}

const FilmContent = (props: FilmContentType) => {
  const router = useNavigate();
  const { loading } = useTypedSelector((state) => state.filmsCatalog);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  let images = props.films?.map((elem) => {
    return (
      <NavLink className={s.film_picture} to={"/main/" + props.type + "/" + elem._id}  key={elem._id} >
         <Movie key={elem._id} time={elem.time} name={elem.name}  img={elem.picture} year={elem.release} />
      </NavLink>
    );
  });

  if (loading) {
    return <Loader />;
  }

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
