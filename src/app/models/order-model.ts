import { Product } from "./product-model";

export interface Order {
    orderId: number;
    userId: number;
    sum: number;
    Items: Product[];
}