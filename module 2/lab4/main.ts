namespace Transport {
	let owner: Transport.Owner = new Transport.OwnerImpl
	(
		"Алеев",
		"Ибрагим",
		"Ильясович",
		new Date("2001-12-13"),
		Transport.doc_t.drive_license,
		329872398,
		23982389
	);

	let a: Transport.Vehicle = new Transport.VehicleImpl(
		"Office",
		"Generic",
		2020,
		"",
		"",
		owner
	)

	owner.print();
	a.print();
}

