import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import Product from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  isLoading!: boolean;
  constructor(private productService: ProductService, private router: Router) {}
  fetchProducts() {
    this.isLoading=true;
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.productList = res;
       this.isLoading = false;
      },
      error: (err) => {
        console.log('Error Fetching Products:' + err);
        this.isLoading = false;
      }
    })
  }
  ngOnInit(): void {
    this.fetchProducts();
  }


  onAddProduct() {
    console.log('Add Product Clicked');
    this.router.navigateByUrl('products/edit');
  }
}
