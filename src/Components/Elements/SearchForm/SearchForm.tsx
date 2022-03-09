import { FC,  useEffect, useMemo, useState } from "react";
import s from "./SearchForm.module.scss";
import arrow from "../../../img/icon_for_search/right-arrow.svg";
import { useDispatch } from "react-redux";
import {
  getFilmSearch,
  setError,
  setFilmSearch,
  setLoading,
} from "../../../Redux/filmSearch-reducer";
import { useLocation } from "react-router";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { message } from "antd";


const SearchForm: FC = () => {
  const [value, setValue] = useState<string>("");
  const [searchTimeout, setSearchTimeout] = useState<any>(false);
  const dispatch = useDispatch();
  const urlParams = useLocation();
  const { error } = useTypedSelector((state) => state.filmSearch);
  const key = "updatable";


  

  function searchChangeHandler(e: any) {
    setValue(e.target.value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }
    dispatch(setLoading(true));
    if (e.target.value !== "") {
      dispatch(setError(""));
      setSearchTimeout(
        setTimeout(
          (value) => {
            dispatch(getFilmSearch(value));
          },
          500,
          e.target.value
        )
      );
    } else {

      dispatch(setFilmSearch([]));
    }
  }
  function searchButton() {
    error == "" ||  message.error({ content: "Фильм не найден", key, duration: 3 });
    if (value !="" && error=="") {
      dispatch(getFilmSearch(value));
    }
  }
  useEffect(() => {
    dispatch(setFilmSearch([]));
  }, [urlParams.pathname]);

  return (
    <div className={s.SearchForm}>
      <div className={s.SearchForm__text}>
        Найдите фильмы, которые вам могут понравится
      </div>
      <div className={s.SearchForm__block}>
        <div className={s.input}>
          <input
            autoComplete="off"
            type="text"
            name="search"
            id=""
            onChange={(e) => searchChangeHandler(e)}
            value={value}
          />
        </div>
        <div className={s.search_button} onClick={() => searchButton()}>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
