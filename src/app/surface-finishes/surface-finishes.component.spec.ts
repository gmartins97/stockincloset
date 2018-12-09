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

import {SurfaceFinishesComponent} from './surface-finishes.component';

describe('SurfaceFinishesComponent', () => {
  let component: SurfaceFinishesComponent;
  let fixture: ComponentFixture<SurfaceFinishesComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          imports : [
            MatTableModule, MatDialogModule, MatSnackBarModule, HttpClientModule
          ],
          declarations : [ SurfaceFinishesComponent ],
          schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceFinishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
