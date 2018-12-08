import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

import {Material} from '../model/Material';
import {Item, Order} from '../model/Order';
import {Product} from '../model/Product';
import {SurfaceFinish} from '../model/SurfaceFinish';
import {MaterialService} from '../services/material.service';
import {OrderService} from '../services/order.service';
import {ProductService} from '../services/product.service';
import {SurfaceFinishService} from '../services/surface-finish.service';

@Component({
  selector : 'app-add-order',
  templateUrl : './add-order.component.html',
  styleUrls : [ './add-order.component.css' ]
})
export class AddOrderComponent implements OnInit {
  productList: Product[];
  materialList: Material[];
  selectedProduct: Product;
  selectedMaterialName: string;
  selectedSurfaceFinish: SurfaceFinish;
  surfaceFinishList: SurfaceFinish[];
  chosenWidth = 1;
  chosenHeight = 1;
  chosenDepth = 1;
  constructor(private router: Router, private productSrv: ProductService,
              private materialSrv: MaterialService,
              private surfaceFinishSrv: SurfaceFinishService,
              private orderSrv: OrderService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getProducts();
    this.getSurfaceFinishes();
  }

  private getProducts(): void {
    this.productSrv.getProducts().subscribe(prods => {
      this.productList = prods;
      this.selectedProduct = this.productList[0];
      this.selectedMaterialName = this.selectedProduct.materialNames[0];
    });
  }

  private getSurfaceFinishes() {
    this.surfaceFinishSrv.getSurfaceFinishes().subscribe(sfs => {
      this.surfaceFinishList = sfs;
      this.selectedSurfaceFinish = this.surfaceFinishList[0];
    });
  }

  createOrder() {
    let item: Item = {
      name : this.selectedProduct.name,
      material : this.selectedMaterialName,
      surfacefinish : this.selectedSurfaceFinish.name,
      width : this.chosenWidth,
      height : this.chosenHeight,
      depth : this.chosenDepth,
      items : []
    };
    let items: Item[] = [ item ];
    let order: Order = {items : items};

    this.orderSrv.createOrder(order).subscribe(
        order => {
          this.snackBar.open("Order has been placed successfully!", "",
                             {duration : 2000});
        },
        error => {
          this.snackBar.open("An error occurred : " + error.error, "",
                             {duration : 3000});
        });
  }

  back() { this.router.navigateByUrl('/orders'); }
}
