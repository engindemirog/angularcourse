import { AuthInterceptor } from './../../interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[]
})
export class CategoryComponent implements OnInit {

  categories : Category[];
  @Input() title:string;
  @Output() currentCategoryEmitter:EventEmitter<string> = new EventEmitter()

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  setCurrentCategory(categoryName:string){
    this.currentCategoryEmitter.emit(categoryName)
  }

  getCategories(){
   this.categoryService.getCategories().subscribe(response=>{
     this.categories = response;
   })
  }

}
