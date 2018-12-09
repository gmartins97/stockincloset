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

import {MaterialsComponent} from './materials.component';

describe('MaterialsComponent', () => {
  let component: MaterialsComponent;
  let fixture: ComponentFixture<MaterialsComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          imports : [
            MatTableModule, MatDialogModule, MatSnackBarModule, HttpClientModule
          ],
          declarations : [ MaterialsComponent ],
          schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
