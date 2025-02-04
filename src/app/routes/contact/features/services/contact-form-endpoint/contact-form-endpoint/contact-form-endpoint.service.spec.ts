import { TestBed } from '@angular/core/testing';

import { ContactFormEndpointService } from './contact-form-endpoint.service';

describe('ContactFormEndpointService', () => {
  let service: ContactFormEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFormEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
