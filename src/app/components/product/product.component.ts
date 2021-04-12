import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts();
      }
    })
    
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

  getProductsByCategory(categoryId:number){
    this.loading = true;
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response
      this.loading = false;
    },error=>{
      console.log(error)
    })
  }



}
