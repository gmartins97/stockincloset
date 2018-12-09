import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import {
  AddCategoryDialogComponent
} from '../add-category-dialog/add-category-dialog.component';
import {
  EditCategoryDialogComponent
} from '../edit-category-dialog/edit-category-dialog.component';
import {Category} from '../model/Category';
import {CategoryService} from '../services/category.service';

@Component({
  selector : 'app-categories',
  templateUrl : './categories.component.html',
  styleUrls : [ './categories.component.css' ]
})
export class CategoriesComponent implements OnInit {
  displayedColumns = [ 'position', 'description', 'parent', 'remove' ];
  dataSource: Category[];

  categoryDialogRef: MatDialogRef<AddCategoryDialogComponent>;
  categoryEditDialogRef: MatDialogRef<EditCategoryDialogComponent>;

  constructor(private dialog: MatDialog, private categorySrv: CategoryService,
              public snackBar: MatSnackBar) {}

  ngOnInit() { this.getCategories(); }

  getCategories() {
    this.categorySrv.getCategories().subscribe(
        data => { this.dataSource = data; },
        error => {
          this.snackBar.open("An error occurred while trying to categories: " +
                                 error.error,
                             "", {
                               duration : 2000,
                             });
        });
  }

  addCategory(): void {
    this.categoryDialogRef = this.dialog.open(AddCategoryDialogComponent);
  }

  editCategory() {
    this.categoryEditDialogRef = this.dialog.open(EditCategoryDialogComponent);
  }

  deleteCategory(id: number) {
    this.categorySrv.deleteCategory(id).subscribe(
        cat => {
          this.snackBar.open(cat.description + " category deleted successfully",
                             "", {
                               duration : 1500,
                             });
          this.getCategories();
        },
        error => {
          this.snackBar.open("An error occurred: " + error.error, "", {
            duration : 2000,
          });
        });
  }
}
