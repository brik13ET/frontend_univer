import {doc_t} from "./doc_t";

import {OwnerImpl} from "./ownerImpl"
import {VehicleImpl} from "./vehicleImpl"
import {VehicleStorageImpl} from "./vehicleStorageImpl"
import {MotorbikeImpl} from "./motorbikeImpl"

import {Owner} from "./owner"
import {Vehicle} from "./vehicle"
import {VehicleStorage} from "./vehiclestorage"
import {Motorbike} from "./motorbike"
import {Car} from "./car"
import {CarImpl} from "./carImpl"
import {TargetClass} from "./targetClass";
import { Bodycase } from "./bodycase";

let owner: Owner = new OwnerImpl
(
	"Алеев",
	"Ибрагим",
	"Ильясович",
	new Date("2001-12-13"),
	doc_t.drive_license,
	329872398,
	23982389
);
let chair: VehicleImpl = new VehicleImpl(
	"Office",
	"Generic",
	2020,
	"",
	"",
	owner
)

let car: Vehicle = new CarImpl
(
	Bodycase.Хэтчбек,
	TargetClass.small_city,
	"lada",
	"2114",
	2013,
	"LJCPCBLCX11000237",
	"В000МВ763RU",
	owner
);
let motorbike: Motorbike = new MotorbikeImpl
(
	"обычный",
	false,
	"ИЖ",
	"Юпитер",
	1990,
	"WP0ZZZ99ZTS392124",
	"Л444ЛЗ163RU",
	owner
);

let vehiclestorage1: VehicleStorage<Vehicle> = new VehicleStorageImpl
(
	new Date(Date.now()),
	[motorbike]
);

let vehiclestorage2: VehicleStorage<Vehicle> = new VehicleStorageImpl<Vehicle>
(
	new Date(Date.now()),
	[car as CarImpl, chair]
);

owner.print();
chair.print();

let stor1 = vehiclestorage1.getAll();
let stor2 = vehiclestorage2.getAll();

console.log(`stor1.length ${stor1.length}`)

for (let i = 0; i < stor1.length; i++)
	stor1[i].print();

console.log(`stor2.length ${stor2.length}`)
for (let i = 0; i < stor2.length; i++)
	stor2[i].print();