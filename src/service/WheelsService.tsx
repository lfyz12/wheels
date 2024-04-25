import {AxiosResponse} from "axios";
import {$host} from "../http";
import {WheelsResponse} from "../models/WheelsResponse";
import {WheelInfo} from "../models/WheelsItemResponse";


export default class {
    static async getWheels(): Promise<AxiosResponse<WheelsResponse>> {
        return new Promise(resolve => resolve($host.get('wheels/')))
    }

    static async getInfoApi(ids: number): Promise<AxiosResponse<WheelInfo>> {
        // @ts-ignore
        return new Promise(resolve => resolve($host.get('api/getInfoApi', {ids})))
    }


}