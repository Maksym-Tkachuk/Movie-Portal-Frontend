import { FC } from "react";
import style from "./MoviesYouLike.module.scss";
import Movie from "./Movie/Movie";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useNavigate, useParams } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type MoviesYouLike = {
  genres: Array<string>;
};

const MoviesYouLike: FC<MoviesYouLike> = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  const { moviesYouLike } = useTypedSelector((state) => state.filmProfile);

  const Movies = moviesYouLike.map(
    (elem: { time: string; name: string;picture: string; release: Number;_id: string;}) => {
      return (
        <div key={elem._id}  onClick={() => navigate(`/main/${params.genre}/${elem._id}`)} >
          <Movie time={elem.time} name={elem.name}  img={elem.picture}  year={elem.release}/>
        </div>);
    }
  );


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 850,
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
    ],
  };

  return (
    <div className={style.like_movies}>
      <div className={style.title}>Другие фильмы</div>
      <hr className={style.line} />
      <div className={style.movies}>
      {Movies}
      </div>
      <div className={style.movies_slider}>
        <Slider {...settings}>
            {Movies}
      </Slider> 
      </div>
    </div>
  );
};

export default MoviesYouLike;

{

}
