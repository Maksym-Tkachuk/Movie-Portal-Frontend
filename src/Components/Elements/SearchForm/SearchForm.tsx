import { FC, ReactEventHandler, useEffect, useState } from "react";
import s from "./SearchForm.module.scss";
import arrow from "../../../img/icon_for_search/right-arrow.svg";
import { useDispatch } from "react-redux";
import {
  getFilmSearch,
  setFilmSearch,
  setLoading,
} from "../../../Redux/filmSearch-reducer";
import { useLocation } from "react-router";
const SearchForm: FC = () => {
  const [value, setValue] = useState<string>("");
  const [searchTimeout, setSearchTimeout] = useState<any>(false);
  const dispatch = useDispatch();
  const urlParams = useLocation();

  console.log(urlParams)
  function searchChangeHandler(e: any) {
    setValue(e.target.value);
    if (searchTimeout != false) {
      clearTimeout(searchTimeout);
    }
    dispatch(setLoading(true));

    if (e.target.value != "") {
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
  useEffect(() => {dispatch(setFilmSearch([]))}, [urlParams.pathname]);

  return (
    <div className={s.SearchForm}>
      <div className={s.SearchForm__text}>
        Найдите фильмы, которые вам могут понравится
      </div>
      <div className={s.SearchForm__block}>
        <div className={s.input}>
          <input
            type="text"
            name="search"
            id=""
            onChange={(e) => searchChangeHandler(e)}
            value={value}
          />
        </div>
        <div className={s.search_button}>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
