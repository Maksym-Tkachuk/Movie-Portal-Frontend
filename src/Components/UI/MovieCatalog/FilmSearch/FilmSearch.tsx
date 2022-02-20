import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { FilmResponce } from "../../../../models/response/FilmGenreResponce";
import Loader from "../../../Elements/Loader/Loader";
import Movie from "../../FilmProfile/MoviesYouLike/Movie/Movie";
import { AllGeners } from "../MovieCatalog";
import s from "./FilmSearch.module.scss";

const FilmSearch: FC = () => {
  const { filmSearch, loading } = useTypedSelector((state) => state.filmSearch);
  const { loadingCatalogFilm } = useTypedSelector(
    (state) => state.filmsCatalog
  );

  let genreUrl = "";

  let images = filmSearch.map((elem: FilmResponce) => {
    for (let gen in AllGeners) {
      //@ts-ignore
      if (AllGeners[gen] == elem.genre[1]) genreUrl = gen;
    }
    return (
      <NavLink
        className={s.film_picture}
        to={"/main/" + genreUrl + "/" + elem._id}
        key={elem._id}
      >
        <Movie
          key={elem._id}
          time={elem.time}
          name={elem.name}
          img={elem.picture}
          year={elem.release}
        />
      </NavLink>
    );
  });

  if (loadingCatalogFilm || loading) {
    return <Loader value={true} />;
  }
  return (
    <section className={s.filmSearch}>
      <div className={s.listOfMovies}>{images}</div>
    </section>
  );
};

export default FilmSearch;
