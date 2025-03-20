import { TestBed } from '@angular/core/testing';
import { MenuTabsService } from './menu-tabs.service';

describe('MenuTabsService', () => {
  let service: MenuTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
