import { ComponentFixture, TestBed } from '@angular/core/testing';
import ContactRouteComponent from './contact-route.component';

describe('ContactComponent', () => {
  let component: ContactRouteComponent;
  let fixture: ComponentFixture<ContactRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(ContactRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
