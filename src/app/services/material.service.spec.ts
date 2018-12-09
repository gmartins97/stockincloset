import {HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';

import {MaterialService} from './material.service';

describe('MaterialService', () => {
  beforeEach(
      () => TestBed.configureTestingModule({imports : [ HttpClientModule ]}));

  it('should be created', () => {
    const service: MaterialService = TestBed.get(MaterialService);
    expect(service).toBeTruthy();
  });
});
