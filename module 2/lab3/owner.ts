import {doc_t} from "./doc_t";

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

