import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Category} from '../model/Category';
import {CategoryService} from '../services/category.service';

@Component({
  selector : 'app-edit-category-dialog',
  templateUrl : './edit-category-dialog.component.html',
  styleUrls : [ './edit-category-dialog.component.css' ]
})
export class EditCategoryDialogComponent implements OnInit {
  selectedCategoryId: number;
  categoryList: Category[];
  categoryDescription: string;
  selectedParentCategoryDescription: string;

  constructor(private categorySrv: CategoryService,
              public snackBar: MatSnackBar) {}

  ngOnInit() { this.getCategories(); }

  private getCategories(): void {
    this.categorySrv.getCategories().subscribe(
        data => { this.categoryList = data; });
  }

  updateCategory() {
    if (this.selectedCategoryId && this.categoryDescription.trim()) {
      this.categorySrv
          .updateCategory(this.selectedCategoryId, this.categoryDescription,
                          this.selectedParentCategoryDescription)
          .subscribe(
              () => {
                this.snackBar.open("Category updated successfully", "", {
                  duration : 2000,
                });
              },
              error => {
                this.snackBar.open("An error occurred...", "", {
                  duration : 1500,
                });
              });
    } else {
      this.snackBar.open("All fields must be fulfilled", "", {
        duration : 1500,
      });
    }
  }
}
