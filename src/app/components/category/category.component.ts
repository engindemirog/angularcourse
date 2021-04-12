import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[] = [
    {id:1, categoryName:"İçecek"},
    {id:2, categoryName:"Yiyecek"},
    {id:3, categoryName:"Giyecek"},
    {id:4, categoryName:"Spor"},
    {id:5, categoryName:"Teknoloji"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
