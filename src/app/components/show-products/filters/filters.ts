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

// import { CategoriesService } from '../../../services/categories-service';
// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-filters',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './filters.html',
//   styleUrl: './filters.scss'
// })
// export class Filters {

//   categoriesService = inject(CategoriesService);
//   maxPrice: number = 1000; // מחיר מקסימלי לדוגמה

//   // כאן תוכל להוסיף משתנים לשמירת הבחירות של המשתמש
//   selectedCategoryId?: number;
//   selectedMinPrice?: number ;
//   selectedMaxPrice?: number;

//   onCategorySelect(categoryId: number) {
//     this.selectedCategoryId = categoryId;
//     // שלח אירוע לקומפוננטה האבא כדי לעדכן את רשימת המוצרים
//   }

//   onMinPriceSelect(price: number) {
//     this.selectedMinPrice = price;
//     // שלח אירוע לקומפוננטה האבא כדי לעדכן את רשימת המוצרים
//   }

//   onMaxPriceSelect(price: number) {
//     this.selectedMaxPrice = price;
//     // שלח אירוע לקומפוננטה האבא כדי לעדכן את רשימת המוצרים
//   }
// }


// import { Component, inject, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { CheckboxModule } from 'primeng/checkbox';
// import { CategoriesService } from '../../../services/categories-service';

// @Component({
//   selector: 'app-filters',
//   standalone: true,
//   imports: [CommonModule, FormsModule, CheckboxModule],
//   templateUrl: './filters.html',
//   styleUrls: ['./filters.scss']
// })
// export class Filters implements OnInit {

//   categoriesService = inject(CategoriesService);

//   categories = this.categoriesService.categories;

//   selectedCategories: any[] = [];

//   ngOnInit() {
//     // אתחול עם Marketing מסומן כמו בתמונה
//     this.selectedCategories = [this.categories[1]];
//   }
// }


import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CategoriesService } from '../../../services/categories-service';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxModule,InputTextModule,InputGroupModule],
  templateUrl: './filters.html',
  styleUrls: ['./filters.scss']
})
export class Filters implements OnInit {

  search: string='';
  
  categoriesService = inject(CategoriesService);

  // טעינת הקטגוריות מהשירות
  categories = this.categoriesService.categories;

  // מערך שיכיל את האובייקטים שנבחרו
  selectedCategories: any[] = [];

  ngOnInit() {
    // אופציונלי: סימון קטגוריה כברירת מחדל
    if (this.categories && this.categories.length > 1) {
      this.selectedCategories = [this.categories[1]];
    }
  }
}
