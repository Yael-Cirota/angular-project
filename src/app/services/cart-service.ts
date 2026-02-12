import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product-model';

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
  
// }
// import { Injectable, signal, computed, effect } from '@angular/core';
// import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // סיגנל פרטי שמחזיק את רשימת המוצרים בסל
  private cartItems = signal<Product[]>([
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
  ]);

  constructor() {
    // טעינת הסל מהזיכרון המקומי (LocalStorage) כשהאפליקציה עולה
    const savedCart = localStorage.getItem('shopping_cart');
    
    if (savedCart) {
      this.cartItems.set(JSON.parse(savedCart));
    }

    // // אפקט ששומר אוטומטית כל שינוי בסל ל-LocalStorage
    // effect(() => {
    //   localStorage.setItem('shopping_cart', JSON.stringify(this.cartItems()));
    // });
  }

  // חשיפת המוצרים לקריאה בלבד
  get items() {
    return this.cartItems.asReadonly();
  }

  // חישוב אוטומטי של המחיר הכולל
  totalPrice = computed(() => {
    return this.cartItems().reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  });

  // הוספת מוצר לסל
  addToCart(product: Product) {
    this.cartItems.update(prevItems => {
      const existingItem = prevItems.find(p => p.id === product.id);

      if (existingItem) {
        // אם המוצר קיים, נעלה כמות
        return prevItems.map(p =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }
      // אם מוצר חדש, נוסיף אותו עם כמות 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  // עדכון כמות (פלוס או מינוס)
  updateQuantity(productId: number, delta: number) {
    this.cartItems.update(prevItems =>
      prevItems.map(p => {
        if (p.id === productId) {
          const newQty = (p.quantity || 1) + delta;
          return { ...p, quantity: newQty > 0 ? newQty : 1 };
        }
        return p;
      })
    );
  }

  // הסרת מוצר מהסל
  removeItem(productId: number) {
    this.cartItems.update(prevItems => prevItems.filter(p => p.id !== productId));
  }

  // ניקוי כל הסל
  clearCart() {
    this.cartItems.set([]);
  }
}

