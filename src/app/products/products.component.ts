import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import Product from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit,DoCheck{
  productList:Product[]=[]
  constructor(
    private productService:ProductService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.productList=this.productService.getProducts();
  }

  ngDoCheck(): void {
    this.productList=this.productService.getProducts();
  }

  onAddProduct(){
    console.log("Add Product Clicked");
    this.router.navigateByUrl('products/edit');
  }
}
