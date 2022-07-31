import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product, ProductList } from "../products/product.model";
import { ProductState, stateNameKey } from "./product.reducer";




export const productSelector = createSelector(
  (state:ProductState)=>state.products,
  (products:Product[])=>products
);

export const getProductListSelector =createSelector(productSelector,(products)=>{
    return products;
})

export default{
    getProductListSelector
}