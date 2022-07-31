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

    constructor(http: HttpClient) {
      this.http = http;
    }
     getProducts():Observable<Product[]>{
        return this.http.get<Product[]>('https://random-data-api.com/api/coffee/random_coffee?size=50');
     }

}