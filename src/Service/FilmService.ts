
import { FilmResponce } from './../models/response/FilmGenreResponce';
import axios, { AxiosResponse } from "axios";
import $api, { API_URL } from "../http/api";
import { initialFilmType } from "../types/film";

export default class FilemService {
  static async addFilm(formData: Object): Promise<any> {
    return $api.post("/film", formData);
  }
  static async getFilmGenre(genre:Array<string>,limit:number): Promise<AxiosResponse<Array<FilmResponce>>> {
    return $api.post(`/film/genre`, {genre:genre,limit:limit});
  }
  static async getFilmSearch(name:string): Promise<AxiosResponse<Array<FilmResponce>>> {
    return $api.post(`/films/search`, {name});
  }
  static async getFilm(): Promise<AxiosResponse<initialFilmType>> {
    return $api.get("/films");
  }
  static async findFilm(name: string): Promise<AxiosResponse<initialFilmType>> {
    return $api.get("/film/" + name);
  }
  static async findFilmById(id: string | undefined): Promise<AxiosResponse<initialFilmType>> {
    return $api.get("/profileFilm/" + id);
  }
  static async updateFilm(formData: Object): Promise<any> {
    return $api.put("/film", formData);
  }
  static async updateRating(id:String,rating:number | undefined): Promise<AxiosResponse<number>> {
    return $api.put("/film/rating", {_id:id,rating});
  }
  static async deleteFilm(name:string): Promise<any> {
    return $api.delete("/film/" + name);
  }
}
