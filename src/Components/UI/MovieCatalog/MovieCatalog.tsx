import { FC, memo, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { FilmResponce } from "../../../models/response/FilmGenreResponce";
import { getFilms } from "../../../Redux/filmCatalog-reducer";
import Loader from "../../Elements/Loader/Loader";
import SearchForm from "../../Elements/SearchForm/SearchForm";
import EnterInformation from "./EnterInformation/EnterInformation";
import FilmContent from "./FilmContent/FilmContent";
import FilmSearch from "./FilmSearch/FilmSearch";

const MovieCatalog: FC = () => {
  const [filmCount,setFilmCount] = useState<number>(0)
const [checkMovies,setcheckMovies] = useState<Array<number>>([])

  const { isAuth } = useTypedSelector((state) => state.auth);
  const { films,loadingCatalogFilm } = useTypedSelector((state) => state.filmsCatalog);
  const { filmSearch,loading } = useTypedSelector((state) => state.filmSearch);
  const dispatch = useDispatch();

  const lastElement:any = useRef();
  const observer:any = useRef();



  const filmFilter = (movies: Array<FilmResponce>, genre: string) => {
    return movies.filter((e) => {
      return e.genre.includes(genre);
    });
  };

  const Movie: Array<{id: number; title: string; films: Array<FilmResponce>; type: string;}> = 
  Object.entries(AllGeners).map((el, index) => {
    return {
      id: index,
      title: el[1],
      films: filmFilter(films, el[1]),
      type: el[0],
    };
  });



useEffect(() => {
    if(loadingCatalogFilm) return;
    if(observer.current) observer.current.disconnect();

    var cb = function(entries:any, observer:any) {
      let interval = 4
        if (entries[0].isIntersecting && (Movie.length-filmCount) >= 4) {
          for(let i = filmCount;i<filmCount+interval;i++){
            setcheckMovies((pre)=>[...pre,i])
            dispatch(getFilms([Movie[i].title], 7, 0));
            if((Movie.length-i) <= 4){
              interval = Movie.length-filmCount
            }
          }
          setFilmCount(filmCount+interval)
        }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(lastElement.current)
}, [loadingCatalogFilm])
  const filmDepartments = Movie.map((elem) =>{
        if(checkMovies.some((el)=>el == elem.id && elem.films.length >=7)){
          return (<FilmContent key={`${elem.id}`} title={elem.title}films={elem.films}type={elem.type} />)}
  }
  );

  return (
    <div>
      {isAuth || <EnterInformation />}
      <SearchForm />
      {filmSearch.length == 0 ? filmDepartments : <FilmSearch />}
      <div ref={lastElement} style={{ height: "5px" }}></div>
    </div>
  );
};

export default memo(MovieCatalog);

export let AllGeners: Object = {
  Sci_Fi: "Фантастика",
  Action: "Боевик",
  Sitcoms: "Комедия",
  Romantic: "Романтика",
  Drama: "Драма",
  Documental: "Документальный",
  Horror: "Ужасы",
  Biographical: "Биографический",
  Western: "Вестерн",
  Military: "Военный",
  Detective: "Детектив",
  Childrens: "Детский",
  Historical: "Исторический",
  MovieComic: "Кинокомикс",
  Short: "Короткометражный",
  Crime: "Криминал",
  Melodrama: "Мелодрама",
  Mystic: "Мистика",
  Musical: "Мюзикл",
  Adventure: "Приключения",
  Family: "Семейный",
  Fantasy: "Фэнтези",
  Thriller: "Триллер",
};
