namespace Transport {

	export interface Owner {
		Lastname: string,
		Firstname: string,
		Middlename: string,
		Birth: Date,
		Doc: doc_t,
		Doc_serial: number,
		Doc_num: number

		print(): void
	}
}