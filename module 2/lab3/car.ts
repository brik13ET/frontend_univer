import {Vehicle} from "./vehicle";
import {Bodycase} from "./bodycase";
import {TargetClass} from "./targetClass";

export interface Car extends Vehicle {
	Case: Bodycase,
	Class: TargetClass
}