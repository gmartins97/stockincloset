import {HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';

import {SurfaceFinishService} from './surface-finish.service';

describe('SurfaceFinishService', () => {
  beforeEach(
      () => TestBed.configureTestingModule({imports : [ HttpClientModule ]}));

  it('should be created', () => {
    const service: SurfaceFinishService = TestBed.get(SurfaceFinishService);
    expect(service).toBeTruthy();
  });
});
