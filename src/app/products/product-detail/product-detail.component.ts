import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {select, Store} from '@ngrx/store';
import { single, switchMap, take } from 'rxjs';
import { getProductDetailSelector, getProductsPageSelector } from 'src/app/store/product.selector';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  id:number=0;
  //roduct$=;

  constructor(private route: ActivatedRoute,private store:Store<any>,private productService:ProductService) { 
  
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
   console.log( this.productService.getProductDetails());
    this.store.pipe(select(getProductDetailSelector(this.id))).subscribe(
    (products)=>{console.log(products)}
    );
  }

}
