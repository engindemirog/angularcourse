import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

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
    
  }

}
