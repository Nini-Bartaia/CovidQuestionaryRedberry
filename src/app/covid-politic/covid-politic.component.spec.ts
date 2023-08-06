import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidPoliticComponent } from './covid-politic.component';

describe('CovidPoliticComponent', () => {
  let component: CovidPoliticComponent;
  let fixture: ComponentFixture<CovidPoliticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CovidPoliticComponent]
    });
    fixture = TestBed.createComponent(CovidPoliticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
