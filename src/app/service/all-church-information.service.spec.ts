import { TestBed } from '@angular/core/testing';

import { AllChurchInformationService } from './all-church-information.service';

describe('AllChurchInformationService', () => {
  let service: AllChurchInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllChurchInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
