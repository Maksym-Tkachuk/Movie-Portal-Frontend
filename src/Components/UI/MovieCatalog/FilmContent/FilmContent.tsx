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
import { useDispatch } from "react-redux";
import { addNewSlide, getFilms } from "../../../../Redux/filmCatalog-reducer";
import { useMemo, useState } from "react";
interface FilmContentType {
  films?: Array<FilmResponce>;
  title?: string;
  type?: string;
}



function SampleNextArrow(props:any) {
  const { className, style, onClick, newSlide} = props;
  const dispatch = useDispatch()

  return (
// <div onClick={()=>dispatch(addNewSlide([newSlide.title],6,newSlide.films.length))}>  
    <div
      className={className}
      style={{...style, display:"flex", alignItems:"center",justifyContent:"center" }}
      onClick={onClick}
    />
    // </div> 
  );
}




const FilmContent = (props: FilmContentType) => {

  const router = useNavigate();

  const { loadingCatalogFilm } = useTypedSelector((state) => state.filmsCatalog);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    slidesPerRow:1,
    nextArrow: <SampleNextArrow  newSlide={props} />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToScroll: 5,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
    ],
  };



  let images = props.films?.map((elem) => {
    return (<>
  

       <NavLink className={s.film_picture} to={"/main/" + props.type + "/" + elem._id}  key={elem._id} >
         <Movie key={elem._id} time={elem.time} name={elem.name}  img={elem.picture} year={elem.release} />
      </NavLink>
      
</>
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
