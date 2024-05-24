import {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import {$host} from "../http";

export default class Userervice {
    async checkAuth(): Promise<AxiosResponse<IUser>> {
        return new Promise(resolve => resolve($host.get('api/user_info')))
    }


}

export const login =     async (username: string, password: string): Promise<AxiosResponse> => {
    return new Promise(resolve => resolve($host.post('login', {username, password})))
}