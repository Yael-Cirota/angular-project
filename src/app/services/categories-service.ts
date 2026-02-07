import { Injectable } from '@angular/core';
import { Category } from '../models/category-model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories: Category[] = [
    {
      id: 0,
      name: "Necklaces"
    },
    {
      id: 1,
      name: "Rings"
    },
    {
      id: 2,
      name: "Earrings"
    },
    {
      id: 3,
      name: "Bracelets"
    },
    // {
    //   id: 4,
    //   name: "Silver Ring",
    // },
    // {
    //   id: 5,
    //   name: "Golden Necklace",
    // }
  ];
}
  
