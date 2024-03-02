namespace Transport {
	export class CarImpl implements Car {
		private _Case: Bodycase;
		private _Class: TargetClass;
		private _Mark: string;
		private _Model: string;
		private _ReleaseYear: number;
		private _VIN: string;
		private _RegNum: string;
		private _Owner: Owner;

		get Case() {
			return this._Case;
		}

		set Case(Case: Bodycase) {
			this._Case = Case;
		}

		get Class() {
			return this._Class;
		}

		set Class(Class: TargetClass) {
			this._Class = Class;
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

		constructor(
			Case: Bodycase,
			Class: TargetClass,
			Mark: string,
			Model: string,
			ReleaseYear: number,
			VIN: string,
			RegNum: string,
			Owner: Owner
		) {
			this._Case = Case;
			this._Class = Class;
			this._Mark = Mark;
			this._Model = Model;
			this._ReleaseYear = ReleaseYear;
			this._VIN = VIN;
			this._RegNum = RegNum;
			this._Owner = Owner;
		}

		print(): void {
			console.log(
				`CarImpl._Case\t${this._Case}\n` +
				`CarImpl._Class\t${this._Class}\n` +
				`CarImpl._Mark\t${this._Mark}\n` +
				`CarImpl._Model\t${this._Model}\n` +
				`CarImpl._ReleaseYear\t${this._ReleaseYear}\n` +
				`CarImpl._VIN\t${this._VIN}\n` +
				`CarImpl._RegNum\t${this._RegNum}\n`
			);
		}
	}
}