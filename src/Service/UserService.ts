
import { AxiosResponse } from "axios";
import $api from "../http/api";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/User";

export default class UserService{
static fetchUsers ():Promise<AxiosResponse> {
return $api.get<IUser[]>('/users')
}
 }
