import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurfaceFinishDialogComponent } from './add-surface-finish-dialog.component';

describe('AddSurfaceFinishDialogComponent', () => {
  let component: AddSurfaceFinishDialogComponent;
  let fixture: ComponentFixture<AddSurfaceFinishDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSurfaceFinishDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurfaceFinishDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
