import {Vehicle} from "./vehicle";
import {VehicleStorage} from "./vehiclestorage";

export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
	get created() {
		return this._created;
	}

	set created(created: Date) {
		this._created = created;
	}

	get elements() {
		return this._elements;
	}

	set elements(elements: T[]) {
		this._elements = elements;
	}

	private _created: Date;
	private _elements: T[];

	getAll(): T[] {
		return this._elements;
	}

	constructor(
		_created: Date,
		_elements: T[]
	) {
		this._created = _created;
		this._elements = _elements;
	}


}