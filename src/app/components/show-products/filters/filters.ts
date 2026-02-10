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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.html',
  styleUrl: './filters.scss'
})
export class Filters {
  // כאן תוכל להוסיף פונקציות לסינון
  selectedSize: string = '01';

  onSizeSelect(size: string) {
    this.selectedSize = size;
    // שלח אירוע לקומפוננטה האבא כדי לעדכן את רשימת המוצרים
  }
}

