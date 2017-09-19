import { TestBed, inject } from '@angular/core/testing';

import { SectionToggleService } from './section-toggle.service';

describe('SectionToggleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectionToggleService]
    });
  });

  it('should ...', inject([SectionToggleService], (service: SectionToggleService) => {
    expect(service).toBeTruthy();
  }));
});
