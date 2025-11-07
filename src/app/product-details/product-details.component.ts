import { Component, Input } from '@angular/core';
import Product from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() product!:Product

  constructor(private productService:ProductService){}

  onDeleteProduct(id:number){
    this.productService.deleteProduct(id);
  }
}
