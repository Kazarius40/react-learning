import {IAddress} from "./IAdress.tsx";
import {ICompany} from "./ICompany.tsx";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}