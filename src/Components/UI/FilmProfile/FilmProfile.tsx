import { FC, useEffect, useState } from "react";
import style from "./FilmProfile.module.scss";
import { useNavigate, useParams } from "react-router";
import { Breadcrumb } from "antd";
import MovieComponent from "./MovieComponent/MovieComponent";
import FilmDescription from "./FilmDescription/FilmDescription";
import MoviesYouLike from "./MoviesYouLike/MoviesYouLike";
import { useDispatch } from "react-redux";
import { findFilById, getMoviesLike } from "../../../Redux/filmProfile-reducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Loader from "../../Elements/Loader/Loader";
import { AllGeners } from "../MovieCatalog/MovieCatalog";
interface FilmProfileType {}

const FilmProfile: FC<FilmProfileType> = (props) => {
  const urlParams = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(findFilById(urlParams.id));
  }, [urlParams.id]);

  const { loading, film} = useTypedSelector((state) => state.filmProfile);

  useEffect(() => {
    dispatch(getMoviesLike(film.genre, 6,0));
  }, [film.genre]);

  let filmsGenres = "";

  for (let value in AllGeners) {
    if (value == urlParams.genre) {
      //@ts-ignore
      filmsGenres = AllGeners[value];
    }
  }



  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Breadcrumb className={style.navigate}>
        <Breadcrumb.Item onClick={() => navigate("/main")}> Главная </Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate(`/main/${urlParams.genre}`)}>
          {filmsGenres}
        </Breadcrumb.Item>
        <Breadcrumb.Item> {film.name} </Breadcrumb.Item>
      </Breadcrumb>
      <MovieComponent movie={film.moving} />
      <div className={style.content}>
        <FilmDescription {...film} />
        <MoviesYouLike genres={film.genre} />
      </div>
    </div>
  );
};

export default FilmProfile;
