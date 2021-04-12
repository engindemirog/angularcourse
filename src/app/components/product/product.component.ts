import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[
    {id:1,categoryId:1,productName:"Elma",unitPrice:10,unitsInStock:10},
    {id:2,categoryId:1,productName:"Armut",unitPrice:10,unitsInStock:10},
    {id:3,categoryId:2,productName:"Portakal",unitPrice:10,unitsInStock:10},
    {id:4,categoryId:3,productName:"Vişne",unitPrice:10,unitsInStock:10},
    {id:5,categoryId:4,productName:"Kiraz",unitPrice:10,unitsInStock:10},
  ]
  constructor() { }
 
  ngOnInit(): void {
  }

}
