namespace Transport {
	export interface VehicleStorage<T extends Vehicle> {
		created: Date,
		elements: T[],

		getAll(): T[]
	}


}