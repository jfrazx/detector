import { TestBed, inject } from '@angular/core/testing';

import { SubmissionFileService } from './submission-file.service';

describe('SubmissionFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmissionFileService]
    });
  });

  it('should be created', inject([SubmissionFileService], (service: SubmissionFileService) => {
    expect(service).toBeTruthy();
  }));
});
