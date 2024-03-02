import {Motorbike} from "./motorbike";
import {Owner} from "./owner";

export class MotorbikeImpl implements Motorbike {
	_case: string;
	_isSpor: boolean;
	_Mark: string;
	_Model: string;
	_ReleaseYear: number;
	_VIN: string;
	_RegNum: string;
	_Owner: Owner;

	get case() {
		return this._case;
	}

	set case(Case: string) {
		this._case = Case;
	}

	get isSpor() {
		return this._isSpor;
	}

	set isSpor(isSpor: boolean) {
		this._isSpor = isSpor;
	}

	get Mark() {
		return this._Mark;
	}

	set Mark(Mark: string) {
		this._Mark = Mark;
	}

	get Model() {
		return this._Model;
	}

	set Model(Model: string) {
		this._Model = Model;
	}

	get ReleaseYear() {
		return this._ReleaseYear;
	}

	set ReleaseYear(ReleaseYear: number) {
		this._ReleaseYear = ReleaseYear;
	}

	get VIN() {
		return this._VIN;
	}

	set VIN(VIN: string) {
		this._VIN = VIN;
	}

	get RegNum() {
		return this._RegNum;
	}

	set RegNum(RegNum: string) {
		this._RegNum = RegNum;
	}

	get Owner() {
		return this._Owner;
	}

	set Owner(Owner: Owner) {
		this._Owner = Owner;
	}

	print(): void {
		console.log(
			`MotorbikeImpl.case\t${this._case}\n` +
			`MotorbikeImpl.isSpor\t${this._isSpor}\n` +
			`MotorbikeImpl.Mark\t${this._Mark}\n` +
			`MotorbikeImpl.Model\t${this._Model}\n` +
			`MotorbikeImpl.ReleaseYear\t${this._ReleaseYear}\n` +
			`MotorbikeImpl.VIN\t${this._VIN}\n` +
			`MotorbikeImpl.RegNum\t${this._RegNum}\n`
		);
	}

	constructor(
		Case: string,
		isSpor: boolean,
		Mark: string,
		Model: string,
		ReleaseYear: number,
		VIN: string,
		RegNum: string,
		Owner: Owner
	) {
		this._case = Case;
		this._isSpor = isSpor;
		this._Mark = Mark;
		this._Model = Model;
		this._ReleaseYear = ReleaseYear;
		this._VIN = VIN;
		this._RegNum = RegNum;
		this._Owner = Owner;
	}

}