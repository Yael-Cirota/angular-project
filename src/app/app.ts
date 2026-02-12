import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ShowProducts } from './components/show-products/show-products';
import { ProductDetails } from './components/product-details/product-details';
import { Cart } from "./components/cart/cart";



@Component({
  selector: 'app-root',
  imports: [ Header, ShowProducts, ProductDetails, Cart],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('jewelleryShop');
  
}
