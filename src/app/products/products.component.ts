import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {MatSnackBar} from '@angular/material';

import {
  AddProductDialogComponent
} from '../add-product-dialog/add-product-dialog.component';
import {Product} from '../model/Product';
import {ProductService} from '../services/product.service';

@Component({
  selector : 'app-products',
  templateUrl : './products.component.html',
  styleUrls : [ './products.component.css' ]
})
export class ProductsComponent implements OnInit {
  displayedColumns = [
    'position', 'name', 'category', 'dimensions', 'parts', 'materials', 'min',
    'max', 'remove'
  ];
  dataSource: Product[];

  productDialogRef: MatDialogRef<AddProductDialogComponent>;
  constructor(private productSrv: ProductService, private dialog: MatDialog,
              public snackBar: MatSnackBar) {}

  ngOnInit() { this.getProducts(); }

  private getProducts(): void {
    this.productSrv.getProducts().subscribe(
        data => { this.dataSource = data; });
  }

  addProduct() {
    this.productDialogRef = this.dialog.open(AddProductDialogComponent);
  }

  editProduct() {}

  deleteProduct(id: number) {
    this.productSrv.deleteProduct(id).subscribe(
        prod => {
          this.snackBar.open(prod.name + " product deleted successfully", "", {
            duration : 1500,
          });
          this.getProducts();
        },
        error => {
          this.snackBar.open("An error occurred...", "", {
            duration : 2000,
          });
        });
  }
}
