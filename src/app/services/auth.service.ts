import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth: boolean = false;
  constructor(private router:Router) {}
  signIn() {
    this.isAuth = true;
    this.router.navigateByUrl('/products');
  }
  signOut() {
    this.isAuth = false;
    this.router.navigateByUrl('/signin');

  }
  isAuthenticated(){
    return this.isAuth;
  }
  
}
