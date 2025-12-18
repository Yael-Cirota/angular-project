import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ShowProducts } from './components/show-products/show-products';
import { ProductDetails } from './components/product-details/product-details';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ShowProducts, ProductDetails],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('jewelleryShop');
  
}
