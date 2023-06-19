import { TestBed } from '@angular/core/testing';

import { ProductlayoutService } from './productlayout.service';

describe('ProductlayoutService', () => {
  let service: ProductlayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductlayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
