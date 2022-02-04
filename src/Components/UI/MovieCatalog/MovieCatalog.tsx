import { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { FilmResponce } from "../../../models/response/FilmGenreResponce";
import SearchForm from "../../Elements/SearchForm/SearchForm";
import EnterInformation from "./EnterInformation/EnterInformation";
import FilmContent from "./FilmContent/FilmContent";
import FilmSearch from "./FilmSearch/FilmSearch";


const MovieCatalog: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { films } = useTypedSelector((state) => state.filmsCatalog);
  const {filmSearch}= useTypedSelector(state => state.filmSearch)
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
    <FilmContent key={elem.id}  title={elem.title} films={elem.films}  type={elem.type}  />
  ));

  return (
    <div>
      {isAuth || <EnterInformation />}
      <SearchForm/>
      {filmSearch.length ==0 ? filmDepartments: <FilmSearch/>}
    </div>
  );
};

export default MovieCatalog;

export let AllGeners:Object = {
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
  Concert: "Концерт",
  Short: "Короткометражный",
  Crime: "Криминал",
  Melodrama: "Мелодрама",
  Mystic: "Мистика",
  Musical: "Мюзикл",
  Noir: "Нуар",
  Adventure: "Приключения",
  Family: "Семейный",
  Fantasy: "Фэнтези",
  Thriller: "Триллер",
  Erotica: "Эротика",
};
