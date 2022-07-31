import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map,  catchError, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Product } from "src/app/products/product.model";
import { ProductService } from '../products/product.service';

import { GetProductsSuccess, ProductActionType,ProductsAction } from './product.actions';

@Injectable()
export class ProductEffects{
  
    constructor(
        private actions$:Actions, 
        private productService:ProductService
    ){}

   getProductsEffect : Observable<ProductsAction> = createEffect(
      ()=> this.actions$.pipe(
        ofType(ProductActionType.GET_PRODUCTS),
        mergeMap(()=>{          
               return this.productService.getProducts().pipe(                
                map((products)=> new GetProductsSuccess(products))                
               ) 
        })
      )  
   )
    

}




