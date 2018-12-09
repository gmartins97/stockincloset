import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import {AddMaterialDialogComponent} from './add-material-dialog.component';

describe('AddMaterialDialogComponent', () => {
  let component: AddMaterialDialogComponent;
  let fixture: ComponentFixture<AddMaterialDialogComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          imports : [ FormsModule, HttpClientModule, MatSnackBarModule ],
          schemas : [ CUSTOM_ELEMENTS_SCHEMA ],
          declarations : [ AddMaterialDialogComponent ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaterialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
