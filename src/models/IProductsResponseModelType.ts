import {IProduct} from "./product/IProduct.ts";

export interface IProductsResponseModelType {
    total: number,
    skip: number,
    limit: number,
    products: IProduct[];
}