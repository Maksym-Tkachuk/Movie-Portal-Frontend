import axios, { AxiosResponse } from "axios";
import $api from "../http/api";
import { IUser } from "../models/User";

export default class ProfileService {
  static async changeAvatar(formData: object): Promise<AxiosResponse<IUser>> {
    return $api.post(`/changeAvatar`, formData);
  }
}
