import { FC, useEffect } from "react";
import style from "./MoviesYouLike.module.scss";
import film from "../../../../img/K-Drama/guard.jpg";
import Movie from "./Movie/Movie";
import { useDispatch } from "react-redux";
import { getFilms } from "../../../../Redux/filmCatalog-reducer";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { API_URL_IMG } from "../../../../http/api";


type MoviesYouLike = {
  genres:Array<string>
}

const MoviesYouLike: FC<MoviesYouLike> = (props) => {
  const dispatch  = useDispatch()
  useEffect(()=>{
    dispatch(getFilms(props.genres,6))
 },[props.genres])
 const {films} = useTypedSelector(state=>state.filmsCatalog)

  return (
    <div className={style.like_movies}>
      <div className={style.title}>Другие фильмы</div>
      <hr className={style.line} />
      <div className={style.movies}>
        
        {//@ts-ignore
        films.map((elem:{time:number,name:string,film:string,release:string,_id:string})=>{
          return <Movie  key={elem._id} time={elem.time}  name={elem.name} img={film} year={elem.release}/>
        })
        }
      </div>
    </div>
  );
};

export default MoviesYouLike;
