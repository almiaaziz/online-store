import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import Product from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  isDeleting!: boolean;
  @Input() product!: Product;
  @Output() productIsDeleted: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(
    private productService: ProductService,
    private router: Router,
    @Inject('BASE_URL') public BASE_URL: any
  ) {}

  onDeleteProduct(id: number) {
    this.isDeleting=true
    this.productService.deleteProduct(id).subscribe({
      next: (res) => {
        console.log('Product' + res.id + ' Deleted Successfully');
        this.productIsDeleted.emit(true);
        this.isDeleting = false;
      },
      error: (err) => {
        console.log('Error Deleting Product:' + err);
        this.isDeleting=false
      },
    });
  }
  onUpdateProduct(id: number) {
    this.router.navigateByUrl('/products/edit/' + id);
  }
}
