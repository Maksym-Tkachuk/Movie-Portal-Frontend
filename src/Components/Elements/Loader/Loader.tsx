import { CircularProgress } from "@mui/material";
import { FC } from "react";
import style from "./Loader.module.scss"


const Loader:FC<{value?:boolean}> = (props) => {
  return (
    <div className={`${props.value ? style.secondFormat:style.progress}`}>
      <CircularProgress disableShrink  color="secondary" />
    </div>
  );
};

export default Loader;
