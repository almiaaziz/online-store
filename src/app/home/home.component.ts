import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  welcome:string="Welcome to our Online Store!";
  description:string="Discover our latest collection of smartphones from top brands";
  promotions:string[]=[
    "Get a free case with every smartphone purchase",
    "Trade-in your old phone and get up to 30% off",
    "Free expedited shipping on all smartphone orders"
  ]
}
