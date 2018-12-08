import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceFinishesComponent } from './surface-finishes.component';

describe('SurfaceFinishesComponent', () => {
  let component: SurfaceFinishesComponent;
  let fixture: ComponentFixture<SurfaceFinishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfaceFinishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfaceFinishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
