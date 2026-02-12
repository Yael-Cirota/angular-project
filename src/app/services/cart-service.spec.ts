// import { TestBed } from '@angular/core/testing';

// import { CartService } from './cart-service';

// describe('CartService', () => {
//   let service: CartService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CartService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


import { TestBed } from '@angular/core/testing';
import { CartService } from './cart-service';
import { Product } from '../models/product-model';

describe('CartService', () => {
  let service: CartService;
  const mockProduct: Product = {
    id: 1, name: 'Test Product', price: 100,
    imageUrl: 'test.jpg', categoryName: 'Test Category'
  };

  beforeEach(() => {
    //לפני כל בדיקה ננקה את הלוקאלסטורג' כדי לוודא שלא נושפע מבדיקות קודמות
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('צריך להוסיף מוצר חדש לסל', () => {
    service.addToCart(mockProduct);
    expect(service.items().length).toBe(1);
    expect(service.items()[0].quantity).toBe(1);
  });

  it('צריך לעדכן כמות אם המוצר כבר קיים', () => {
    service.addToCart(mockProduct);
    service.addToCart(mockProduct); // הוספה פעם שנייה
    expect(service.items()[0].quantity).toBe(2);
  });

  it('צריך לחשב מחיר כולל בצורה נכונה', () => {
    service.addToCart(mockProduct); // 100
    service.updateQuantity(mockProduct.id, 1); // עכשיו כמות 2 = 200
    expect(service.totalPrice()).toBe(200);
  });

  it('צריך להסיר מוצר מהסל', () => {
    service.addToCart(mockProduct);
    service.removeItem(mockProduct.id);
    expect(service.items().length).toBe(0);
  });

  it('לא אמור לאפשר כמות קטנה מ-1', () => {
    service.addToCart(mockProduct);
    service.updateQuantity(mockProduct.id, -10); // ניסיון להוריד מתחת ל-0
    expect(service.items()[0].quantity).toBe(1);
  });
});
