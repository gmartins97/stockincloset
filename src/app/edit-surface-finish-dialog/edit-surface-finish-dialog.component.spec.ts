import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';

import {
  EditSurfaceFinishDialogComponent
} from './edit-surface-finish-dialog.component';

describe('EditSurfaceFinishDialogComponent', () => {
  let component: EditSurfaceFinishDialogComponent;
  let fixture: ComponentFixture<EditSurfaceFinishDialogComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          imports : [ FormsModule, HttpClientModule, MatSnackBarModule ],
          schemas : [ CUSTOM_ELEMENTS_SCHEMA ],
          declarations : [ EditSurfaceFinishDialogComponent ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSurfaceFinishDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
