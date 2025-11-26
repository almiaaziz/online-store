import { Component } from '@angular/core';
import Product from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editProduct',
  templateUrl: './editProduct.component.html',
  styleUrls: ['./editProduct.component.css'],
})
export class EditProductComponent {
  constructor(private productService: ProductService, private router: Router) {}
  product: Product = new Product('', '', 0, 0);

  onSubmit() {
     if(!this.product.image || this.product.image.trim() === '') {
    this.product.image = '../../assets/images/no-image.png';
  }
    this.productService.addProduct(this.product);

    this.router.navigateByUrl('products');
  }
}
