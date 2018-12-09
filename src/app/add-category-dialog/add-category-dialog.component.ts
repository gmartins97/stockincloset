import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {Category} from '../model/Category';
import {CategoryService} from '../services/category.service';

@Component({
  selector : 'app-add-category-dialog',
  templateUrl : './add-category-dialog.component.html',
  styleUrls : [ './add-category-dialog.component.css' ]
})
export class AddCategoryDialogComponent implements OnInit {

  categories: Category[];
  categoryDescription: string;
  selectedParentCategoryDescription: string;

  constructor(private categorySrv: CategoryService,
              public snackBar: MatSnackBar) {}

  ngOnInit() { this.getCategories(); }

  getCategories() {
    this.categorySrv.getCategories().subscribe(
        data => { this.categories = data; });
  }

  createCategory() {
    let catDesc = this.categoryDescription.trim();
    let parentCatDesc = this.selectedParentCategoryDescription;
    if (catDesc) {
      this.categorySrv.createCategory(catDesc, parentCatDesc)
          .subscribe(
              category => {
                this.snackBar.open(category.description +
                                       " category created successfully",
                                   "", {
                                     duration : 2000,
                                   });
                this.categoryDescription = "";
              },
              error => {this.snackBar.open("An error occurred: " + error.error,
                                           "", {duration : 1500})});
    } else {
      this.snackBar.open("Category's description can't be empty", "", {
        duration : 1500,
      });
    }
  }
}
