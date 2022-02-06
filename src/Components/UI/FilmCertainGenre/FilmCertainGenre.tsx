import { NavLink } from "react-router-dom";
import s from "./FilmCertainGenre.module.scss";
import { useNavigate, useParams } from "react-router";

import React, { FC, memo, RefObject, useEffect, useRef } from "react";

import { AllGeners } from "../MovieCatalog/MovieCatalog";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { addFilmsGenre, getFilmsGenre, setFilmsGenre, setLoadingNewFilm } from "../../../Redux/filmCatalog-reducer";
import Loader from "../../Elements/Loader/Loader";
import Movie from "../FilmProfile/MoviesYouLike/Movie/Movie";
import { useObserver } from "../../../hooks/useObserver";

const FilmCertainGenre: FC = () => {

  const router = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const genre = params.genre;
  const { filmsGenre, loading,loadingNewFilm } = useTypedSelector( (state) => state.filmsCatalog);
  const lastElement:any= useRef()
  let filmsGenres = "";


  for (let value in AllGeners) {
    if (value == genre) {
      //@ts-ignore
      filmsGenres = AllGeners[value];
    }
  }

let filmCountScip = filmsGenre.length
    

useEffect(() => {
  dispatch(setFilmsGenre([]));
  dispatch(setLoadingNewFilm(false));
}, [filmsGenres]);

  useObserver(lastElement,loading,loadingNewFilm, ()=>{dispatch(addFilmsGenre([filmsGenres], 12, filmCountScip))})


  //@ts-ignore
  let images = filmsGenre.map((elem: any) => {
    return (
      <NavLink key={`${elem._id}`} className={s.film_picture}  to={"/main/" + genre + "/" + elem._id}>
       <Movie  time={elem.time}  name={elem.name}  img={elem.picture} year={elem.release} />
      </NavLink>
    );
  });

 

  return (
    <section className={s.FilmContent}>
      <div className={s.FilmContent__Inner}>
        <div className={s.FilmContent__name} onClick={() => router(`/main/${genre}`)}>
          {filmsGenre.length == 0 && !loading? `Фильмов жанра ${filmsGenres} еще не добавлено на сайт....` :filmsGenres}
        </div>
        <div className={s.listOfMovies}>{images}</div>
      </div>
      {loading && <Loader value={true}/>}
      <div ref={lastElement} style={{height:"1px",background:"black"}}></div>
    </section>
  );
};

export default memo(FilmCertainGenre);
