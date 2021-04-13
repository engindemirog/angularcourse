import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl : string = "http://localhost:3001/products"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getProductsByCategory(categoryId:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl+"?categoryId="+categoryId);
  }

  add(product:Product):Observable<any>{
    return this.httpClient.post(this.apiUrl,product)
  }
  
}