import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {
  MatDialog,
  MatDialogModule,
  MatSnackBar,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';

import {ProductsComponent} from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          imports : [
            MatTableModule, MatDialogModule, MatSnackBarModule, HttpClientModule
          ],
          declarations : [ ProductsComponent ],
          schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
