
// export class Product {
//     id!: number;
//     name!: string;
//     price: number = 0;
//     categoryName: string = '';
//     description?: string;
//     imageUrl: string = '';
// }

export interface Product {
    id: number;
    name: string;
    price: number;
    categoryName: string;
    description?: string; // סימן השאלה אומר שהשדה יכול להיות חסר (null/undefined)
    imageUrl: string;
}