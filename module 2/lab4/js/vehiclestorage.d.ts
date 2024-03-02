declare namespace Transport {
    interface VehicleStorage<T extends Vehicle> {
        created: Date;
        elements: T[];
        getAll(): T[];
    }
}
