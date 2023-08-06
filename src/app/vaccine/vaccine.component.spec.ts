import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineComponent } from './vaccine.component';

describe('VaccineComponent', () => {
  let component: VaccineComponent;
  let fixture: ComponentFixture<VaccineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaccineComponent]
    });
    fixture = TestBed.createComponent(VaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
