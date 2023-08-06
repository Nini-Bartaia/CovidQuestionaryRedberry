import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankupageComponent } from './thankupage.component';

describe('ThankupageComponent', () => {
  let component: ThankupageComponent;
  let fixture: ComponentFixture<ThankupageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThankupageComponent]
    });
    fixture = TestBed.createComponent(ThankupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
