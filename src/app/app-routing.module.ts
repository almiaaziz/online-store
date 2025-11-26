import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { authGuard } from './guards/auth.guard';
import { EditProductComponent } from './editProduct/editProduct.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [authGuard],
  },
  { path: 'signin', component: SigninComponent },
  {
    path: 'products/edit',
    component: EditProductComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
