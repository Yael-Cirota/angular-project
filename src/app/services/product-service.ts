import { Injectable } from '@angular/core';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
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
      id: 2,
      name: "Diamond Earrings",
      price: 499.99,
      imageUrl: "assets/images/h03180gpz-1.png",
      categoryName: "Earrings",
      description: "Sparkling diamond earrings to enhance your beauty."
    },
    {
      id: 3,
      name: "Platinum Bracelet",
      price: 399.99,
      description: "Stylish platinum bracelet for special occasions.",
      imageUrl: "assets/images/b11245ppz-1.png",
      categoryName: "Bracelets"
    },
    {
      id: 4,
      name: "Silver Ring",
      price: 149.99,
      description: "Elegant silver ring with intricate designs.",
      // imageUrl: "assets/images/r32587gz-1.png",
      imageUrl: "assets/images/g11219fg-1.jpg",
      categoryName: "Rings"
    },
    {
      id: 0,
      name: "Golden Necklace",
      price: 299.99,
      description: "A beautiful golden necklace perfect for any occasion.",
      imageUrl: "assets/images/l26491gcl-1.png",
      categoryName: "Necklaces"
    }
  ];
}
