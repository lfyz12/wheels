import {AxiosResponse} from "axios";
import {$host} from "../http";
import {TWheelsList} from "../models/WheelsResponse";


export default class {
    static async searchProducts(text: string, page: number = 1): Promise<AxiosResponse<TWheelsList>> {
        return new Promise(resolve => resolve($host.get(`api/searchApi?text=${text}&page=${page}`)))
    }

    static async getProducts(long: number, st: string, diam: string, width_prof: string, height_prof: string, season: string, manufacter: string, radio: string): Promise<AxiosResponse> {
        return new Promise(resolve => resolve($host.get('api/getPlus?long=' + long + '&st=' + st + '&diam=' + diam + '&width_prof=' + width_prof + '&height_prof=' + height_prof + '&season=' + season + '&manufacter=' + manufacter + '&radio=' + radio)))
    }

    static async addProducts(long: number = 16, st: string = 'new', diam: string = 'Диаметр (R)', width_prof: string = 'Ширина профиля', height_prof: string = 'Высота профиля', season: string = 'Сезон', manufacter: string = 'Производитель', radio: string): Promise<AxiosResponse> {
        return new Promise(resolve => resolve($host.get('api/getPlus?long=' + long + '&st=' + st + '&diam=' + diam + '&width_prof=' + width_prof + '&height_prof=' + height_prof + '&season=' + season + '&manufacter=' + manufacter + '&radio=' + radio)))
    }
    static async addProductToBasket(id: number, st: string = 'add'): Promise<AxiosResponse> {
        return new Promise(resolve => resolve($host.get(`api/socketApi?id=${id}&st=${st}`)))
    }

    static async delProductFroBasket(id: number, st: string = 'del'): Promise<AxiosResponse> {
        return new Promise(resolve => resolve($host.get(`api/socketApi?id=${id}&st=${st}`)))
    }

    static async getFilters(type: string): Promise<AxiosResponse> {
        return new Promise(resolve => resolve($host.get(`api/filters?type=${type}`)))
    }

    static async getRecomended(radio: string): Promise<AxiosResponse> {
        return new Promise(resolve => resolve($host.get(`api/recomended?radio=${radio}`)))
    }
}