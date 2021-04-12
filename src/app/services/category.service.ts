import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl : string = "http://localhost:3000/categories"

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.apiUrl);
  }
  
}