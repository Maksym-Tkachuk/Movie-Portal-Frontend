import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { FilmResponce } from "../../../models/response/FilmGenreResponce";
import { getFilms } from "../../../Redux/filmCatalog-reducer";
import Loader from "../../Elements/Loader/Loader";
import { Geners } from "../UploadFilms/GenreFiled/GenreFiled";
import EnterInformation from "./EnterInformation/EnterInformation";
import FilmContent from "./FilmContent/FilmContent";

const MovieCatalog: FC = () => {

  const { isAuth } = useTypedSelector((state) => state.auth);
  const { films, loading } = useTypedSelector((state) => state.filmsCatalog);

  


  const filmFilter = (movies: Array<FilmResponce>, genre: string) => {
    return movies.filter((e) => {
      return e.genre.includes(genre);
    });
  };

  const Movies: Array<{
    id: string;
    title: string;
    films: Array<FilmResponce>;
    isAuth: boolean;
    type: string;
  }> = [
    {
      id: "1",
      title: "Фантастика",
      films: filmFilter(films, "Фантастика"),
      isAuth: isAuth,
      type: "Sci_Fi",
    },
    {
      id: "2",
      title: "Боевик",
      films: filmFilter(films, "Боевик"),
      isAuth: isAuth,
      type: "Action",
    },
    {
      id: "3",
      title: "Комедия",
      films: filmFilter(films, "Комедия"),
      isAuth: isAuth,
      type: "Sitcoms",
    },
    {
      id: "4",
      title: "Романтика",
      films: filmFilter(films, "Романтика"),
      isAuth: isAuth,
      type: "Romantic",
    },
    {
      id: "5",
      title: "Драма",
      films: filmFilter(films, "Драма"),
      isAuth: isAuth,
      type: "Drama",
    },
    {
      id: "6",
      title: "Документальный",
      films: filmFilter(films, "Документальный"),
      isAuth: isAuth,
      type: "Documental",
    },
    {
      id: "7",
      title: "Ужасы",
      films: filmFilter(films, "Ужасы"),
      isAuth: isAuth,
      type: "Horror",
    },
  ];

  const filmDepartments = Movies.map((elem) => (
    <FilmContent  key={elem.id} title={elem.title}  films={elem.films}   type={elem.type}/>));



  return (
    <div>
      {isAuth || <EnterInformation />}
      {filmDepartments}
    </div>
  );
};

export default MovieCatalog;

export let AllGeners = {
  Sci_Fi: "Фантастика",
  Action: "Боевик",
  Sitcoms: "Комедия",
  Romantic: "Романтика",
  Drama: "Драма",
  Документальный: "Documental",
  Horror: "Ужасы",
};
