import { FC, useEffect } from "react";
import style from "./MoviesYouLike.module.scss";
import Movie from "./Movie/Movie";
import { useDispatch } from "react-redux";
import { getFilms } from "../../../../Redux/filmCatalog-reducer";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useNavigate, useParams } from "react-router";
import { getMoviesLike } from "../../../../Redux/filmProfile-reducer";
import Loader from "../../../Elements/Loader/Loader";

type MoviesYouLike = {
  genres: Array<string>;
};

const MoviesYouLike: FC<MoviesYouLike> = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  const { moviesYouLike } = useTypedSelector(
    (state) => state.filmProfile
  );

  return (
    <div className={style.like_movies}>
      <div className={style.title}>Другие фильмы</div>
      <hr className={style.line} />
      <div className={style.movies}>
        {moviesYouLike.map(
          (elem: {
            time: string;
            name: string;
            picture: string;
            release: Number;
            _id: string;
          }) => {
            return (
              <div
              key={elem._id}  onClick={() => navigate(`/main/${params.genre}/${elem._id}`)}
              >
                <Movie
                  time={elem.time}
                  name={elem.name}
                  img={elem.picture}
                  year={elem.release}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MoviesYouLike;
