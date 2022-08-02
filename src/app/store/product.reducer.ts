import { Product,ProductList } from "../products/product.model";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as productActions  from "./product.actions";

export const stateNameKey:string ="ProductState";

export interface ProductState{
    products:Product[],
    hasLoaded:boolean
}
const initState:ProductState={
    products:[],
    hasLoaded:false,
}
export function ProductReducer(state:ProductState=initState, action:Action) : ProductState{
   switch(action.type){
    case productActions.ProductActionType.GET_PRODUCTS_SUCCESS:
        {           
        return {...state,products:(<productActions.ProductsAction>action).payload ,hasLoaded:true}
        }
    default: return {...state}    
   }

}



