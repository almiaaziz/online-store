import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent implements OnInit, DoCheck {
  isAuth!: boolean;

  constructor(private authService: AuthService) {}
  onSignIn() {
    this.authService.signIn();
  }
  onSignOut() {
    this.authService.signOut();
  }
  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
  }
  ngDoCheck(): void {
    this.isAuth = this.authService.isAuthenticated();
  }
}
