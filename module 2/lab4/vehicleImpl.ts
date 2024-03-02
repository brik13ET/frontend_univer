namespace Transport {
	export class VehicleImpl implements Vehicle {
		private _Mark: string
		private _Model: string
		private _ReleaseYear: number
		private _VIN: string
		private _RegNum: string
		private _Owner: Owner


		get Mark() {
			return this._Mark;
		}

		set Mark(Mark) {
			this._Mark = Mark;
		}

		get Model() {
			return this._Model;
		}

		set Model(Model) {
			this._Model = Model;
		}

		get ReleaseYear() {
			return this._ReleaseYear;
		}

		set ReleaseYear(ReleaseYear) {
			this._ReleaseYear = ReleaseYear;
		}

		get VIN() {
			return this._VIN;
		}

		set VIN(VIN) {
			this._VIN = VIN;
		}

		get RegNum() {
			return this._RegNum;
		}

		set RegNum(RegNum) {
			this._RegNum = RegNum;
		}

		get Owner() {
			return this._Owner;
		}

		set Owner(Owner) {
			this._Owner = Owner;
		}

		print(): void {
			console.log(
				`VehicleImpl.Mark\t${this.Mark}\n` +
				`VehicleImpl.Model\t${this.Model}\n` +
				`VehicleImpl.ReleaseYear\t${this.ReleaseYear}\n` +
				`VehicleImpl.VIN\t${this.VIN}\n` +
				`VehicleImpl.RegNum\t${this.RegNum}\n`
			);
		}

		constructor(
			Mark: string,
			Model: string,
			ReleaseYear: number,
			VIN: string,
			RegNum: string,
			Owner: Owner
		) {
			this._Mark = Mark;
			this._Model = Model;
			this._ReleaseYear = ReleaseYear;
			this._VIN = VIN;
			this._RegNum = RegNum;
			this._Owner = Owner;
		}
	}
}