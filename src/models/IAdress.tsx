import {Geo} from "./IGeo.tsx";


export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}