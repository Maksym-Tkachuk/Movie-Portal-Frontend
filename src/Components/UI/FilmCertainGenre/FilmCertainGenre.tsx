import { NavLink } from "react-router-dom";
import s from "./FilmCertainGenre.module.scss";
import { useNavigate, useParams } from "react-router";

import { FC, useEffect, useMemo } from "react";
import { API_URL_IMG } from "../../../http/api";
import { AllGeners } from "../MovieCatalog/MovieCatalog";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getFilms } from "../../../Redux/filmCatalog-reducer";

const FilmCertainGenre: FC = () => {
  const router = useNavigate();
  const params = useParams();
  const dispatch = useDispatch()
  const genre = params.genre
  const {films} = useTypedSelector(state=>state.filmsCatalog)

  console.log(films)
  let filmsGenre = ""

   for (let value in AllGeners){
    if(value == genre){
      //@ts-ignore
      filmsGenre =  AllGeners[value]
    }
  }

  useEffect(()=>{
    dispatch(getFilms([filmsGenre],20))
},[])



//@ts-ignore
  let images = films.map((elem:any) => {
    return (
      <NavLink className={s.film_picture}  to={"/main/" + genre + "/" + elem._id}  key={elem._id}>
        <img src={`${API_URL_IMG}/${elem.picture}`} alt="" />
      </NavLink>
    );
  });

  return (
    <section className={s.FilmContent}>
      <div className={s.FilmContent__Inner}>
        <div
          className={s.FilmContent__name}
          onClick={() => router(`/main/${genre}`)}
        >
          {filmsGenre}
        </div>

        <div className={s.listOfMovies}>{images}</div>
      </div>
    </section>
  );
};

export default FilmCertainGenre;
