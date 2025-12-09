import { Component, OnInit } from '@angular/core';
import Product from '../models/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editProduct',
  templateUrl: './editProduct.component.html',
  styleUrls: ['./editProduct.component.css'],
})
export class EditProductComponent implements OnInit {
  productId!: String | null;
  product!: Product;
  isSaving: boolean = false;
  isLoading: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param) => (this.productId = param.get('id'))
    );
    if (this.productId) {
      this.isLoading = true;

      this.productService.getProductById(+this.productId).subscribe({
        next: (res) => {
          this.product = res;
          this.isLoading = false;
        },
        error: (error) => {
          console.log('Error Fetching Product:' + error);
          this.isLoading = false;
        },
      });
    } else {
      this.product = new Product('', '', 0, 0);
    }
  }

  onSubmit() {
    this.isSaving = true;

    if (!this.product.image || this.product.image.trim() === '') {
      this.product.image = 'images/no-image.png';
    }
    if (this.productId) {
      this.productService.updateProduct(this.product).subscribe({
        next: () => {
          this.router.navigateByUrl('products');
          this.isSaving = false;
        },
        error: (err) => {
          console.log('Error Updating Product:' + err);
          this.isSaving = false;
        },
      });
    } else {
      this.productService.addProduct(this.product).subscribe({
        next: () => this.router.navigateByUrl('products'),
        error: (err) => console.log('Error Adding Product:' + err),
      });
    }
  }
}
