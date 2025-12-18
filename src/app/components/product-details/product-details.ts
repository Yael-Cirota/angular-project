import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Product } from '../../models/product-model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product-details',
  imports: [ImageModule, CardModule, ButtonModule, InputNumber, FormsModule, CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {

  quantity: number = 1;

  // productService = inject(ProductService);
  product: Product = {
    id: 1,
    name: "Silver Ring",
    price: 149.99,
    description: "Elegant silver ring with intricate designs.",
    // imageUrl: "assets/images/r32587gz-1.png",
    imageUrl: "assets/images/g11219fg-1.jpg",
    categoryName: "Rings"
  }

  product2: Product = {
    id: 0,
    name: "Golden Necklace",
    price: 299.99,
    description: "A beautiful golden necklace perfect for any occasion.",
    imageUrl: "assets/images/l26491gcl-1.png",
    categoryName: "Necklaces"
  }
}
