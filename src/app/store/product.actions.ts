import { Action, createAction,props } from "@ngrx/store";
import { Product, ProductList } from "src/app/products/product.model";



export enum ProductActionType {
    GET_PRODUCTS='[Products] Get the list of products from the service',
    GET_PRODUCTS_SUCCESS='[Products] Get the list of products from the service is successfull'
}


export class GetProducts implements Action {
    type: ProductActionType = ProductActionType.GET_PRODUCTS;
    constructor(public payload:any){

    }
}

export class GetProductsSuccess implements Action {
    type: ProductActionType = ProductActionType.GET_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]){
    }
}

export type ProductsAction= GetProducts | GetProductsSuccess