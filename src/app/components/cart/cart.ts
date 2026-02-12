// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   imports: [],
//   templateUrl: './cart.html',
//   styleUrl: './cart.scss',
// })
// export class Cart {
// }


import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service';
import { Product } from '../../models/product-model';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DataViewModule
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  private cartService = inject(CartService);

  products = this.cartService.items;
  totalPrice = this.cartService.totalPrice;

  updateQuantity(item: Product, delta: number) {
    this.cartService.updateQuantity(item.id, delta);
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
  }

  checkout() {
    const total = this.totalPrice();
    alert(`עובר לתשלום: ${total} ₪`);
    //מעבר לתשלום

  }
}
