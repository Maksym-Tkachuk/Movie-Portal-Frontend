import { FC } from "react";
import style from './FilmDescription.module.scss'

const CountryFlags: FC<{ country: string }> = ({ country }): any => {
  let flag = "US"
  for (let elem in countryFlags) {
    if (countryFlags[elem].name == country) {
      flag = countryFlags[elem].code;
    }
  }

  return <img
  className={style.flag}
  alt={country}
  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${flag}.svg`}/>
};

export default CountryFlags;

const countryFlags: Array<{ name: string; code: string }> = [
  { name: "Росия", code: "RU" },
  { name: "США", code: "US" },
  { name: "Фанция", code: "FR" },
  { name: "Индия", code: "IN" },
  { name: "Япония", code: "JP" },
  { name: "Китай", code: "CN" },
];
