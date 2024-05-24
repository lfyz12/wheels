import {TWheelItem, TWheelsList} from "../models/WheelsResponse";
import {DiskItemResponse, WheelsItemResponse} from "../models/WheelsItemResponse";
import {makeAutoObservable} from "mobx";
import WheelsService from "../service/WheelsService";
import {wheelStore} from "../index";


type TFilters = {
    diametr: string[]
    season?: string[]
    shirina: string[]
    profil: string[]
    manufacturer: string[]
    model_manufacturer: string[]
    et?: string[]
    color?: string[]
    dia?: string[]
    type?: string[]
}

export class WheelsStore {
    wheelsList = [] as TWheelsList
    newWheelsList = [] as TWheelItem[]
    wheelsItem = {} as TWheelItem
    filtersList = {} as TFilters
    totalCount: number = 0;
    constructor() {
        makeAutoObservable(this)
    }
    setWheelsList(list: TWheelsList ) {
        this.wheelsList = list
    }

    private setTotalCount(items: number) {
        this.totalCount += items
    }

    setWheelItem(item: TWheelItem) {
        this.wheelsItem = item
    }

    setNewWheels(list: TWheelItem[] ) {
        this.newWheelsList = list
    }
    setFilters(list: TFilters) {
        this.filtersList = list
    }

    async getOne(long: number, st: string, diam: string, width_prof: string, height_prof: string, season: string, manufacter: string, radio: string) {
        const {data} = await WheelsService.getProducts(long, st, diam, width_prof, height_prof, season, manufacter, radio)
        let response: TWheelItem[] = []
        for (let item in data[1]) {
            response.push(data[1][item])
        }
        this.setNewWheels(response)
        return response
    }

    async searchWheels(text: string) {
        const {data} = await WheelsService.searchProducts(text)
        // @ts-ignore
        this.setWheelsList(data[1])
        console.log(this.wheelsList)
    }

    async searchOneWheel(text: string) {
        const {data} = await WheelsService.searchProducts(text)
        // @ts-ignore
        this.setWheelItem(data[1][0])
        console.log(this.wheelsItem)
    }

    async newWheels(long: number, st: string, diam: string, width_prof: string, height_prof: string, season: string, manufacter: string, radio: string) {
        const {data} = await WheelsService.getProducts(long, st, diam, width_prof, height_prof, season, manufacter, radio)
        let response: TWheelItem[] = []
        for (let item in data[1]) {
            response.push(data[1][item])
        }
        this.setTotalCount(response.length)
        this.setNewWheels(response)
        return response
    }

    async addWheels(long: number = 10, st: string = 'add', diam: string = 'Диаметр (R)', width_prof: string = 'Ширина профиля', height_prof: string = 'Высота профиля', season: string = 'Сезон', manufacter: string = 'Производитель', radio: string) {
        const {data} = await WheelsService.addProducts(long, st, diam, width_prof, height_prof, season, manufacter, radio)
        let response: TWheelItem[] = []
        for (let item in data[1]) {
            response.push(data[1][item])
        }
        this.setNewWheels([...this.newWheelsList, ...response])
        this.setTotalCount(response.length)
        return response
    }

    async getRecomend(radio: string) {
        const {data} = await WheelsService.getRecomended(radio)
        // this.setNewWheels(data[1])
        console.log(data)
        return data
    }

    async addProductToBasket(id: number) {
        const response = await WheelsService.addProductToBasket(id)
        return response.data
    }

    async delProductFromBasket(id: number) {
        const response = await WheelsService.delProductFroBasket(id)
        return response.data
    }

    async getFilters(type: string) {
        const {data} = await WheelsService.getFilters(type)
        this.setFilters(data[0])
        console.log(this.filtersList)
        return data
    }
}
