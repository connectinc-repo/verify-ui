import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardEmpComponent } from './onboard-emp.component';

describe('OnboardEmpComponent', () => {
  let component: OnboardEmpComponent;
  let fixture: ComponentFixture<OnboardEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
