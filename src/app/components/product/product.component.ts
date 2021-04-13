import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
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
  filterText:string="";
  constructor(private productService:ProductService,
     private activatedRoute:ActivatedRoute, 
     private toastrService:ToastrService,
     private cartService:CartService) { }
 
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

  addToCart(product:Product){
      this.cartService.addToCart(product)
      this.toastrService.success("Sepete eklendi",product.name)
  }
}
