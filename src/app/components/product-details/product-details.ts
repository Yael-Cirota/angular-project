import { Component, inject, input } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Product } from '../../models/product-model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../services/product-service';


@Component({
  selector: 'app-product-details',
  imports: [ImageModule, CardModule, ButtonModule, InputNumber, FormsModule, CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {

  quantity: number = 1;

  productService = inject(ProductService);

  // product = input<Product>();
  //בשביל הבדיקה כרגע:
  product: Product = this.productService.products[0];
}

