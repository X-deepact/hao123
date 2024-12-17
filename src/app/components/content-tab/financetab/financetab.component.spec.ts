import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancetabComponent } from './financetab.component';

describe('FinancetabComponent', () => {
  let component: FinancetabComponent;
  let fixture: ComponentFixture<FinancetabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancetabComponent]
    });
    fixture = TestBed.createComponent(FinancetabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
