import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private productService:ProductService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
      this.productAddForm = this.formBuilder.group({
        name:["",[Validators.required, Validators.minLength(2)]],
        categoryId:["",Validators.required],
        unitPrice:["",[Validators.required,Validators.min(0)]],
        unitsInStock:["",[Validators.required,Validators.min(0)]]
      })
  }

  add(){
   this.productService.add(this.productAddForm.value).subscribe(response=>{
    this.toastrService.success("Ürün eklendi",this.productAddForm.value["name"]);
   });
   
  }

}
