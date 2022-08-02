import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, filter, Observable, Subject,takeUntil,switchMap, tap} from 'rxjs'
import {select, Store} from '@ngrx/store';
import { Product, ProductList } from '../product.model';
import { ProductService } from '../product.service';
import { ProductState } from 'src/app/store/product.reducer';
import { ProductActionType, ProductsAction, GetProducts } from 'src/app/store/product.actions';
import { getProductListSelector, getProductsPageSelector ,getIfDataLoadedSelector} from 'src/app/store/product.selector';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public ngDestroyed$ = new Subject();
  //products:Product[]=[];
  currentPage$=new BehaviorSubject<number>(1);
  
  products$=this.store.pipe(select(getProductsPageSelector(this.currentPage$.value)));

  constructor(private productService:ProductService,private store:Store<any>,private _router:Router) { 
        
  }

  ngOnInit(): void {
  
  this.store.pipe(select(getIfDataLoadedSelector)).subscribe(hasLoaded=>{
    if(!hasLoaded)
    {
      this.store.dispatch(new GetProducts({})); 
    }
  });
    


  }
  nextPage(){
    this.currentPage$.next(this.currentPage$.value +1);
    this.getProductsPage();
  }
  previousPage(){
    if(this.currentPage$.value > 1)
    {
      this.currentPage$.next(this.currentPage$.value -1);
      this.getProductsPage();
    }
  }
  getProductsPage(){
    this.products$=this.store.pipe(select(getProductsPageSelector(this.currentPage$.value))); 
    console.log(this.products$);
  }
  gotoDetailspage(product:Product,id:number)
  {
    this.productService.setProduct(product);
    this._router.navigate(['product-detail',id]);
  }
}
