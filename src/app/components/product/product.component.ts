import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[]
})
export class ProductComponent implements OnInit {

  products:Product[];
  loading:boolean = false;
  constructor(private productService:ProductService) { }
 
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.loading = true;
    this.productService.getProducts().subscribe(response=>{
      this.products = response
      this.loading = false;
    },error=>{
      console.log(error)
    })
  }



}
