import { Component, OnInit } from '@angular/core';
import {filter, Observable, Subject,takeUntil} from 'rxjs'
import {select, Store} from '@ngrx/store';
import { Product, ProductList } from '../product.model';
import { ProductService } from '../product.service';
import { ProductState } from 'src/app/store/product.reducer';
import { ProductActionType, ProductsAction, GetProducts } from 'src/app/store/product.actions';
import { getProductListSelector } from 'src/app/store/product.selector';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public ngDestroyed$ = new Subject();
  //productList$:Product[];
  constructor(private productService:ProductService,private store:Store<any>) { 
        
  }

  ngOnInit(): void {
  //this.store.dispatch(new GetProducts({}))

   /*this.productService.getProducts().subscribe(data =>{
       console.log(data);
   })*/
   this.loadProducts();
   this.store.dispatch(new GetProducts({}));  
  



  }

  loadProducts(){
    this.store.select(getProductListSelector).pipe().subscribe(data=>{
      console.log(data);
     }); 
  }


}
