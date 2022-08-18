import { Pet } from "./pet.model";

export interface Person{
    id?: string,
    rut: string,
    name: string,
    lastName: string,
    age: number,
    address: string,
    pets: Pet[];
    createDate: Date,
    updateDate: Date,
}