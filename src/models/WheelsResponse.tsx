import {DiskItemResponse, WheelsItemResponse} from "./WheelsItemResponse";

export type TWheelsList = WheelsItemResponse[] | DiskItemResponse[]

export type TWheelItem = {
    id: number,
    diametr: string
    shirina: string
    profil: string
    season: string
    name: string
    price: string
    ostatok: string
    img: string
    articul: string
    et: string
    dia: string
    manufacturer?: string
    model_manufacturer?: string
    color?: string
}