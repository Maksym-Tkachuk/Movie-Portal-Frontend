import { FC } from "react";
import style from "./FilmProfile.module.scss";
import { useNavigate, useParams } from "react-router";
import { Breadcrumb } from "antd";
import MovieComponent from "./MovieComponent/MovieComponent";
import FilmDescription from "./FilmDescription/FilmDescription";
import MoviesYouLike from "./MoviesYouLike/MoviesYouLike";
interface FilmProfileType {}

const FilmProfile: FC<FilmProfileType> = (props) => {
  const urlParams = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Breadcrumb className={style.navigate}>
        <Breadcrumb.Item onClick={() => navigate("/main")}>
          Первая страница
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate(`/main/${urlParams.gener}`)}>
          {urlParams.gener}
        </Breadcrumb.Item>
      </Breadcrumb>
      <MovieComponent />
      <div className={style.content}>
        <FilmDescription />
       <MoviesYouLike/>
      </div>
    </div>
  );
};

export default FilmProfile;
