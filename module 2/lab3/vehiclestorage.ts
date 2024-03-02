import {Vehicle} from "./vehicle";

export interface VehicleStorage<T extends Vehicle> {
	created: Date,
	elements: T[],

	getAll(): T[]
}

