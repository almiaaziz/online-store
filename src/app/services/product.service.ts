import { Injectable, OnInit } from '@angular/core';
import Product from '../models/product';
import { PRODUCTS } from '../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] =PRODUCTS;

  constructor() {}
  getProducts(): Product[] {
    return this.products;
  }
  deleteProduct(id:number){
    this.products= this.products.filter((product)=>product.id!==id)
    console.log(this.products)

  }
  addProduct(product:Product){
    this.products.push({...product,id:this.products.length+1});
  }
}
