import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import {
  AddSurfaceFinishDialogComponent
} from './add-surface-finish-dialog.component';

describe('AddSurfaceFinishDialogComponent', () => {
  let component: AddSurfaceFinishDialogComponent;
  let fixture: ComponentFixture<AddSurfaceFinishDialogComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          imports : [ FormsModule, HttpClientModule, MatSnackBarModule ],
          declarations : [ AddSurfaceFinishDialogComponent ],
          schemas : [ CUSTOM_ELEMENTS_SCHEMA ]

        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurfaceFinishDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
