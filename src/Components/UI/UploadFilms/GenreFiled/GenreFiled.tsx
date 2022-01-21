import { useMemo, useState } from "react";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

export default function GenreFiled({ field, form, ...props }: any) {
  const { film } = useTypedSelector((state) => state.filmProfile);

  const [genre, setGenre] = useState<Array<any>>([...film.genre]);

  let genreParam = [...film.genre].map((elem) => {
    return { title: elem };
  });
  useMemo(() => {
    let geners = genre.map((elem) => {
      return elem.title;
    });
    form.values.genre = [...geners];
  }, [genre]);

  if (typeof genre[0] == "string") form.values.genre = [...film.genre];
  return (
    <div>
      <Autocomplete
        multiple
        id="tags-standard"
        options={Geners}
        getOptionLabel={(option: any) => option.title}
        onChange={(event, value: any) => {
          value ? setGenre([...value]) : setGenre([...genreParam]);
          console.log(value);
        }}
        defaultValue={genreParam}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
}

export const Geners = [
  { title: "Аниме" },
  { title: "Биографический" },
  { title: "Боевик" },
  { title: "Вестерн" },
  { title: "Военный" },
  { title: "Детектив" },
  { title: "Детский" },
  { title: "Документальный" },
  { title: "Драма" },
  { title: "Исторический" },
  { title: "Кинокомикс" },
  { title: "Комедия" },
  { title: "Концерт" },
  { title: "Короткометражный" },
  { title: "Криминал" },
  { title: "Мелодрама" },
  { title: "Мистика" },
  { title: "Музыка" },
  { title: "Мультфильм" },
  { title: "Мюзикл" },
  { title: "Нуар" },
  { title: "Приключения" },
  { title: "Реалити-шоу" },
  { title: "Семейный" },
  { title: "Спорт" },
  { title: "Ток-шоу" },
  { title: "Триллер" },
  { title: "Ужасы" },
  { title: "Фантастика" },
  { title: "Фэнтези" },
  { title: "Эротика" },
  { title: "Романтика" },
];
