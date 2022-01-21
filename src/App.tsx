import { Navigate, Route, Routes } from "react-router";
import s from "./App.module.scss";
import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";
import { ModalWindow } from "./Components/Elements/Modal/ModalWindow";
import { useEffect } from "react";
import { ButtonSquare } from "./Components/Elements/Button/ButtonSquare";
import { useDispatch } from "react-redux";
import { chekAuth } from "./Redux/auth-reducer";
import { CircularProgress } from "@mui/material";
import UploadFilms from "./Components/UI/UploadFilms/UploadFilms";
import MovieCatalog from "./Components/UI/MovieCatalog/MovieCatalog";
import { useTypedSelector } from "./hooks/useTypedSelector";
import FilmProfile from "./Components/UI/FilmProfile/FilmProfile";
import { ModalStatus } from "./Components/Elements/Modal/ModalContext";
import Loader from "./Components/Elements/Loader/Loader";
import { getFilms } from "./Redux/filmCatalog-reducer";


function App() {
  let dispatch = useDispatch();
  const { isLoading, isAuth } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(chekAuth());
    }
  }, []);



  if (isLoading) {
    return <Loader/>
  }

  return (
    <ModalStatus>
      <div className={s.Wrraper}>
        {!isAuth && ( <ModalWindow />)}

        <Header />


        <div className={s.container}>
          <Routes>
            <Route path="/main" element={<MovieCatalog />} />
            <Route path="/main/:gener/:id" element={<FilmProfile />} />
            <Route path="/Changes-Films" element={<UploadFilms />} />
            <Route path="*" element={<Navigate replace to="/main" />} />
          </Routes>

          { isAuth || (  <ButtonSquare big={true}  text={"Sign in"}  /> )}

          <Footer />

        </div>
      </div>
    </ModalStatus>
  );
}

export default App;
