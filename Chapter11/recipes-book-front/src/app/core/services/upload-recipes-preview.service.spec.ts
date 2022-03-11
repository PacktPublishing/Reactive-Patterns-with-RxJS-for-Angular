import { TestBed } from '@angular/core/testing';

import { UploadRecipesPreviewService } from './upload-recipes-preview.service';

describe('UploadRecipesPreviewService', () => {
  let service: UploadRecipesPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadRecipesPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
