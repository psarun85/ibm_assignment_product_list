import { ActionReducerMap } from "@ngrx/store";
import * as fromProducts from "./store/product.reducer";

export interface AppState{
    products:fromProducts.ProductState;
}
export const reducers:ActionReducerMap<AppState>={
    products:fromProducts.ProductReducer
};


