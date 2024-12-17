import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashiontabComponent } from './fashiontab.component';

describe('FashiontabComponent', () => {
  let component: FashiontabComponent;
  let fixture: ComponentFixture<FashiontabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashiontabComponent]
    });
    fixture = TestBed.createComponent(FashiontabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
