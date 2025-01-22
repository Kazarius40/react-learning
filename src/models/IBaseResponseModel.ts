import {IProduct} from "./product/IProduct.ts";

export interface IProductsResponseModel {
    total: number,
    skip: number,
    limit: number,
    products: IProduct[];
}