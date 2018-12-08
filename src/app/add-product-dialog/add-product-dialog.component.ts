import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Category} from '../model/Category';
import {Dimension, Dimensions} from '../model/Dimension';
import {Material} from '../model/Material';
import {Product} from '../model/Product';
import {CategoryService} from '../services/category.service';
import {MaterialService} from '../services/material.service';
import {ProductService} from '../services/product.service';

@Component({
  selector : 'app-add-product-dialog',
  templateUrl : './add-product-dialog.component.html',
  styleUrls : [ './add-product-dialog.component.css' ]
})
export class AddProductDialogComponent implements OnInit {
  productList: Product[];
  materialList: Material[];
  categoryList: Category[];

  productName: string;

  minWidth: number;
  minHeight: number;
  minDepth: number;

  maxWidth: number;
  maxHeight: number;
  maxDepth: number;

  discreteWidth: number;
  discreteHeight: number;
  discreteDepth: number;

  selectedPartsNames: string[];
  selectedMaterialsNames: string[];
  selectedCategoryDescription: string;

  minOccupancyPerc: number;
  maxOccupancyPerc: number;

  constructor(private productSrv: ProductService,
              private materialSrv: MaterialService,
              private categorySrv: CategoryService,
              public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getProducts();
    this.getMaterials();
    this.getCategories();
  }

  private getCategories() {
    this.categorySrv.getCategories().subscribe(
        cats => {this.categoryList = cats});
  }

  private getMaterials() {
    this.materialSrv.getMaterials().subscribe(
        mats => {this.materialList = mats});
  }

  private getProducts() {
    this.productSrv.getProducts().subscribe(
        prods => {this.productList = prods});
  }

  createProduct() {
    let width: Dimension = {
      discrete : this.discreteWidth,
      min : this.minWidth,
      max : this.maxWidth
    };
    let height: Dimension = {
      discrete : this.discreteHeight,
      min : this.minHeight,
      max : this.maxHeight
    };
    let depth: Dimension = {
      discrete : this.discreteDepth,
      min : this.minDepth,
      max : this.maxDepth
    };

    let dimensions:
        Dimensions = {width : width, height : height, depth : depth};

    this.productSrv
        .createProduct(this.productName, this.selectedCategoryDescription,
                       dimensions, this.selectedPartsNames,
                       this.selectedMaterialsNames, this.minOccupancyPerc,
                       this.maxOccupancyPerc)
        .subscribe(prod => {this.snackBar.open(
                       prod.name + " product created successfully", "", {
                         duration : 2000,
                       })},
                   error => {this.snackBar.open("An error occurred...", "",
                                                {duration : 1500})});
  }
}
