import { Component } from '@angular/core';
import Product from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls:['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private productService:ProductService,private router:Router){}
  product:Product=new Product('','',0,0);

  onSubmit(){
    this.productService.addProduct(this.product);
    this.router.navigateByUrl('product-management');

  }


}
