
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Product } from '../../models/product-model';
import { ButtonModule } from 'primeng/button';

@Component({
       selector: 'app-show-products',
       imports: [CardModule,ButtonModule,CurrencyPipe],
       templateUrl: './show-products.html',
       styleUrls: ['./show-products.scss'],
})
export class ShowProducts {

  products: Product[] = [
    {
      id: 0,
      name: "Golden Necklace",
      price: 299.99,
      description: "A beautiful golden necklace perfect for any occasion.",
      imageUrl: "assets/images/l26491gcl-1.png",
      categoryName: "Necklaces"
    },
    {
      id: 1,
      name: "Silver Ring",
      price: 149.99,
      description: "Elegant silver ring with intricate designs.",
      imageUrl: "assets/images/r32587gz-1.png",
      categoryName: "Rings"
    },
    {
      id: 1,
      name: "Silver Ring",
      price: 149.99,
      description: "Elegant silver ring with intricate designs.",
      imageUrl: "assets/images/r32587gz-1.png",
      categoryName: "Rings"
    },
    {
      id: 2,
      name: "Diamond Earrings",
      price: 499.99,  
      imageUrl: "assets/images/h03180gpz-1.png",
      categoryName: "Earrings",
      description: "Sparkling diamond earrings to enhance your beauty."
    }
  ];
  // @Input() product!: Product;
  @Output() productClicked = new EventEmitter<number>();
  product: Product={
    id:0,
    name: "Golden Necklace",
    price: 299.99,
    description: "A beautiful golden necklace perfect for any occasion.",
    imageUrl: "assets/images/Logo.jpg",
    categoryName: "Necklaces"
 };
  constructor() { }

  goToDetails(): void {
    // מונע מעבר אם אין מוצר, למרות ש-! מבטיח שיש
    if (this.product && this.product.id) {
        this.productClicked.emit(this.product.id);
    }
  }
}