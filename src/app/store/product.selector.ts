import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { Product, ProductList } from "../products/product.model";
import { ProductsListComponent } from "../products/products-list/products-list.component";
import { ProductState, stateNameKey } from "./product.reducer";


export const getAppState = createFeatureSelector<ProductState>('products');

export const productSelector = createSelector(
  (state:ProductState)=>state.products,
  (products:Product[])=>products
);

export const getProductListSelector =createSelector(getAppState,(products:ProductState)=>products.products);

export const getProductsPageSelector=(pageNum:number)=>createSelector(getProductListSelector,
  (products:Product[])=> products.slice((pageNum -1) * 10,((pageNum -1) *10)+10)
  );

export const getProductDetailSelector=(productId:number)=>createSelector(getAppState,
  (state)=>state.products[productId]
  );

  export const getIfDataLoadedSelector=createSelector(getAppState,
    (state)=>state.hasLoaded
    );
export default{
    getProductListSelector,
    getProductsPageSelector,
    getProductDetailSelector,
    getIfDataLoadedSelector
}