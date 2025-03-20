import { ComponentFixture, TestBed } from '@angular/core/testing';
import ResumeRouteComponent from './resume-route.component';

describe('AboutComponent', () => {
  let component: ResumeRouteComponent;
  let fixture: ComponentFixture<ResumeRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(ResumeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
