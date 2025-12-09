import { Inject, Injectable, OnInit } from '@angular/core';
import Product from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  /*
  GET    /posts
GET    /posts/:id
POST   /posts
PUT    /posts/:id
PATCH  /posts/:id
DELETE /posts/:id
  */

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') public BASE_URL: any
  ) {}
  httpOptions = {
    headers: { 'Content-Type': 'application/json' },
  };
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL + 'products');
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.BASE_URL + 'products/' + id);
  }
  deleteProduct(id: number):Observable<any> {
    return this.http.delete(this.BASE_URL + 'products/' + id);
  }
  addProduct(product: Product) {
    return this.http.post(
      this.BASE_URL + 'products',
      product,
      this.httpOptions
    );
  }
  updateProduct(product:Product){
    return this.http.put(
      this.BASE_URL + 'products/' + product.id,
      product,
      this.httpOptions
    );
  }
}
