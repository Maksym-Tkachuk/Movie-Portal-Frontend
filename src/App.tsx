
import s from "./App.module.scss";
import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";
import { ModalWindow } from "./Components/Elements/Modal/ModalWindow";
import { lazy,  useEffect } from "react";
import { useDispatch } from "react-redux";
import { chekAuth } from "./Redux/auth-reducer";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { ModalStatus } from "./Components/Elements/Modal/ModalContext";
import Loader from "./Components/Elements/Loader/Loader";
import RoutesComponent from "./Components/UI/Routes/RoutesComponent";
import { Navigate, useNavigate } from "react-router";


function App() {
  let dispatch = useDispatch();
  const { isLoading, isAuth } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(chekAuth());
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ModalStatus>
      <div className={s.Wrraper}>
        {!isAuth && <ModalWindow />}
        <Header />
        <RoutesComponent/>
        <Footer />
      </div>
    </ModalStatus>
  );
}

export default App;
