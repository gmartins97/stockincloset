import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';

import {EditMaterialDialogComponent} from './edit-material-dialog.component';

describe('EditMaterialDialogComponent', () => {
  let component: EditMaterialDialogComponent;
  let fixture: ComponentFixture<EditMaterialDialogComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          imports : [ FormsModule, HttpClientModule, MatSnackBarModule ],
          schemas : [ CUSTOM_ELEMENTS_SCHEMA ],
          declarations : [ EditMaterialDialogComponent ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMaterialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
