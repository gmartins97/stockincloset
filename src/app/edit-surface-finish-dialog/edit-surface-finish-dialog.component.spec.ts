import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSurfaceFinishDialogComponent } from './edit-surface-finish-dialog.component';

describe('EditSurfaceFinishDialogComponent', () => {
  let component: EditSurfaceFinishDialogComponent;
  let fixture: ComponentFixture<EditSurfaceFinishDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSurfaceFinishDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSurfaceFinishDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
