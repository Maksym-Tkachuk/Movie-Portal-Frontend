import { Navigate, Route, Routes } from "react-router";
import s from "./App.module.scss";
import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";
import { ModalWindow } from "./Components/Elements/Modal/ModalWindow";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { chekAuth } from "./Redux/auth-reducer";
import UploadFilms from "./Components/UI/UploadFilms/UploadFilms";
import { useTypedSelector } from "./hooks/useTypedSelector";
import FilmProfile from "./Components/UI/FilmProfile/FilmProfile";
import { ModalStatus } from "./Components/Elements/Modal/ModalContext";
import Loader from "./Components/Elements/Loader/Loader";

import FilmCertainGenre from "./Components/UI/FilmCertainGenre/FilmCertainGenre"
const MovieCatalog = lazy(
  () => import("./Components/UI/MovieCatalog/MovieCatalog")
);

function App() {
  let dispatch = useDispatch();
  const { isLoading, isAuth } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(chekAuth());
    }
  }, []);
  // const GenresForDispatch = Geners.map((elem) => elem.title);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ModalStatus>
      <div className={s.Wrraper}>
        {!isAuth && <ModalWindow />}
        <Header />
        <div className={s.container}>
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path="/main" element={<MovieCatalog />} />
              <Route path="/main/:genre/:id" element={<FilmProfile />} />
              <Route path="/Changes-Films" element={<UploadFilms />} />
              <Route path="/main/:genre" element={<FilmCertainGenre />} />
              <Route path="*" element={<Navigate replace to="/main" />} />
            </Routes>{" "}
          </Suspense>
        </div>
        <Footer />
      </div>
    </ModalStatus>
  );
}

export default App;
