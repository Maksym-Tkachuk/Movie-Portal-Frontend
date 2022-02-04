import { NavLink } from "react-router-dom";
import s from "./FilmCertainGenre.module.scss";
import { useNavigate, useParams } from "react-router";

import { FC, useEffect } from "react";

import { AllGeners } from "../MovieCatalog/MovieCatalog";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getFilmsGenre } from "../../../Redux/filmCatalog-reducer";
import Loader from "../../Elements/Loader/Loader";
import Movie from "../FilmProfile/MoviesYouLike/Movie/Movie";

const FilmCertainGenre: FC = () => {
  const router = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const genre = params.genre;
  const { filmsGenre, loading } = useTypedSelector(
    (state) => state.filmsCatalog
  );

  let filmsGenres = "";

  for (let value in AllGeners) {
    if (value == genre) {
      //@ts-ignore
      filmsGenres = AllGeners[value];
    }
  }

  useEffect(() => {
    dispatch(getFilmsGenre([filmsGenres], 12));
  }, [filmsGenres]);

  //@ts-ignore
  let images = filmsGenre.map((elem: any) => {
    return (
      <NavLink className={s.film_picture}  to={"/main/" + genre + "/" + elem._id}  key={elem._id} >
       <Movie key={elem._id} time={elem.time}  name={elem.name}  img={elem.picture} year={elem.release} />
      </NavLink>
    );
  });

  if (loading) {
  return   <Loader />;
  }

  return (
    <section className={s.FilmContent}>
      <div className={s.FilmContent__Inner}>
        <div
          className={s.FilmContent__name}
          onClick={() => router(`/main/${genre}`)}
        >
          {filmsGenre.length == 0 && !loading? `Фильмов жанра ${filmsGenres} еще не добавлено на сайт....` :filmsGenres}
        </div>
        <div className={s.listOfMovies}>{images}</div>
      </div>
    </section>
  );
};

export default FilmCertainGenre;
