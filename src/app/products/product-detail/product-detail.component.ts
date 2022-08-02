import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  data:Product={    id:0,
    uid:'',
    blend_name:'',
    origin:'',
    variety:'',
    notes:'',
    intensifier:''};
  constructor(private route: ActivatedRoute,private store:Store<any>,private productService:ProductService,private _router:Router) { 
  
  }

  ngOnInit(): void {

  this.data=this.productService.getProductDetails();

  if(this.data.blend_name === '')
  {
    this._router.navigate(['']);
  }
    
  }

}
