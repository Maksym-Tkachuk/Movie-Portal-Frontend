import { FC, useEffect } from "react";
import style from "./FilmProfile.module.scss";
import { useNavigate, useParams } from "react-router";
import { Breadcrumb } from "antd";
import MovieComponent from "./MovieComponent/MovieComponent";
import FilmDescription from "./FilmDescription/FilmDescription";
import MoviesYouLike from "./MoviesYouLike/MoviesYouLike";
import { useDispatch } from "react-redux";
import { findFilById } from "../../../Redux/filmProfile-reducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
interface FilmProfileType {}

const FilmProfile: FC<FilmProfileType> = (props) => {
  const urlParams = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(findFilById(urlParams.id))
  },[])

  const {loading,film}= useTypedSelector(state=>state.uploadFilm)
  console.log(film)
  return (
    <div>
      <Breadcrumb className={style.navigate}>
        <Breadcrumb.Item onClick={() => navigate("/main")}>
          Первая страница
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate(`/main/${urlParams.genre}`)}>
          {urlParams.genre}
        </Breadcrumb.Item>
      </Breadcrumb>
      <MovieComponent movie={film.moving}/>
      <div className={style.content}>
        <FilmDescription {...film}/>
       <MoviesYouLike genres = {film.genre}/>
      </div>
    </div>
  );
};

export default FilmProfile;