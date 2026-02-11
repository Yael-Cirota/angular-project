import { Injectable } from '@angular/core';
import { Order } from '../models/order-model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  
  sendOrder(order: Order){
    //send to order controller
  }
}
