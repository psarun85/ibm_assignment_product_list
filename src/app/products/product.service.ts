import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Product, ProductList } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

    http: HttpClient;
    currentProduct:Product;
    constructor(http: HttpClient) {
      this.http = http;
      this.currentProduct={
 id:0,blend_name:'',uid:'',origin:'',variety:'',intensifier:'',notes:''}
      ;
    }
     getProducts():Observable<Product[]>{
        return this.http.get<Product[]>('https://random-data-api.com/api/coffee/random_coffee?size=50');
     }

     setProduct(product:Product){
      this.currentProduct=product;
     }

     getProductDetails(){
      return this.currentProduct;
     }


}