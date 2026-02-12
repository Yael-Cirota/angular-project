
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Product } from '../../models/product-model';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../../services/product-service';
// import { filter } from 'rxjs';
import { Filters } from './filters/filters';

@Component({
       selector: 'app-show-products',
       imports: [CardModule,ButtonModule,CurrencyPipe,Filters],
       templateUrl: './show-products.html',
       styleUrls: ['./show-products.scss'],
})

export class ShowProducts {

  productService = inject(ProductService);

  // @Input() product!: Product;
  @Output() productClicked = new EventEmitter<number>();

  goToDetails() {
    // // מונע מעבר אם אין מוצר, למרות ש-! מבטיח שיש
    // if (this.product && this.product.id) {
    //     this.productClicked.emit(this.product.id);
    // }
  }
}