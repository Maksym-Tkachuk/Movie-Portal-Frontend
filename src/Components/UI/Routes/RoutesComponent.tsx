import { memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import Loader from "../../Elements/Loader/Loader";
import FilmCertainGenre from "../FilmCertainGenre/FilmCertainGenre";
import FilmProfile from "../FilmProfile/FilmProfile";
import MovieCatalog from "../MovieCatalog/MovieCatalog";
import UploadFilms from "../UploadFilms/UploadFilms";
import s from "../../../App.module.scss";

const RoutesComponent = () => {
  return (
    <div className={s.container}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/main" element={<MovieCatalog />} />
          <Route path="/main/:genre/:id" element={<FilmProfile />} />
          <Route path="/Changes-Films" element={<UploadFilms />} />
          <Route path="/main/:genre" element={<FilmCertainGenre />} />
          <Route path="*" element={<Navigate replace to="/main" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default memo(RoutesComponent);
