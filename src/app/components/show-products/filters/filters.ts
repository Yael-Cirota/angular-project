// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { CheckboxModule } from 'primeng/checkbox';
// import { AccordionModule } from 'primeng/accordion';
// import { ButtonModule } from 'primeng/button';
// import { CategoriesService } from '../../../services/categories-service';


// @Component({
//   selector: 'app-filters',
//   imports: [CommonModule, FormsModule, CheckboxModule, AccordionModule, ButtonModule],
//   templateUrl: './filters.html',
//   styleUrl: './filters.scss',
// })
// export class Filters {

//   categoriesService = inject(CategoriesService);

//   widths = ['XXN', 'XN', 'N', 'M', 'W', 'XW', 'XXW'];
//   Categories = this.categoriesService.categories;
//   amazonBrands = ['המותגים שלנו', 'מותגי פרימיום', 'מותגים מובילים'];

//   // משתנים לשמירת הבחירות
//   selectedWidths: string[] = [];
//   selectedBrands: string[] = [];
//   selectedAmazon: string[] = [];
// }

import { CategoriesService } from '../../../services/categories-service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.html',
  styleUrl: './filters.scss'
})
export class Filters {

  categoriesService = inject(CategoriesService);
  maxPrice: number = 1000; // מחיר מקסימלי לדוגמה

  // כאן תוכל להוסיף משתנים לשמירת הבחירות של המשתמש
  selectedCategoryId?: number;
  selectedMinPrice?: number ;
  selectedMaxPrice?: number;

  onCategorySelect(categoryId: number) {
    this.selectedCategoryId = categoryId;
    // שלח אירוע לקומפוננטה האבא כדי לעדכן את רשימת המוצרים
  }

  onMinPriceSelect(price: number) {
    this.selectedMinPrice = price;
    // שלח אירוע לקומפוננטה האבא כדי לעדכן את רשימת המוצרים
  }

  onMaxPriceSelect(price: number) {
    this.selectedMaxPrice = price;
    // שלח אירוע לקומפוננטה האבא כדי לעדכן את רשימת המוצרים
  }
}

