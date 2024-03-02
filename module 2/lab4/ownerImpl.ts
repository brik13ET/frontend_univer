namespace Transport {
	export class OwnerImpl implements Owner {
		private _lastname: string
		private _firstname: string
		private _middlename: string
		private _birth: Date
		private _doc: doc_t
		private _doc_serial: number
		private _doc_num: number

		set Lastname(lastname: string) {
			this._lastname = lastname;
		}

		get Lastname() {
			return this._lastname;
		}

		set Firstname(firstname: string) {
			this._firstname = firstname;
		}

		get Firstname() {
			return this._firstname;
		}

		set Middlename(middlename: string) {
			this._middlename = middlename;
		}

		get Middlename() {
			return this._middlename;
		}

		set Birth(birth: Date) {
			this._birth = birth;
		}

		get Birth() {
			return this._birth;
		}

		set Doc(doc: doc_t) {
			this._doc = doc;
		}

		get Doc() {
			return this._doc;
		}

		set Doc_serial(doc_serial: number) {
			this._doc_serial = doc_serial;
		}

		get Doc_serial() {
			return this._doc_serial;
		}

		set Doc_num(doc_num: number) {
			this._doc_num = doc_num;
		}

		get Doc_num() {
			return this._doc_num;
		}

		print(): void {
			console.log(
				`OwnerImpl.Lastname\t${this._lastname}\n` +
				`OwnerImpl.Firstname\t${this._firstname}\n` +
				`OwnerImpl.Middlename\t${this._middlename}\n` +
				`OwnerImpl.Birth\t${this._birth}\n` +
				`OwnerImpl.Doc\t${this._doc}\n` +
				`OwnerImpl.doc_serial\t${this._doc_serial}\n` +
				`OwnerImpl.doc_num\t${this._doc_num}\n`
			);
		}

		constructor(
			Lastname: string,
			Firstname: string,
			Middlename: string,
			Birth: Date,
			Doc: doc_t,
			doc_serial: number,
			doc_num: number
		) {
			this._lastname = Lastname;
			this._firstname = Firstname;
			this._middlename = Middlename;
			this._birth = Birth;
			this._doc = Doc;
			this._doc_serial = doc_serial;
			this._doc_num = doc_num;
		}
	}
}
