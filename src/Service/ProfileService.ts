import { AxiosResponse } from "axios";
import $api from "../http/api";
import { IUser } from "../models/User";

export default class ProfileService {
static async changeAvatar(
  formData: object
  ): Promise<AxiosResponse<IUser>> {

    return $api.post(`/files/changeAvatar`,formData,{
       headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      });
  }
}
