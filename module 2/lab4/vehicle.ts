namespace Transport {
	export interface Vehicle {
		Mark: string,
		Model: string,
		ReleaseYear: number,
		VIN: string,
		RegNum: string,
		Owner: Owner,

		print(): void
	}
}