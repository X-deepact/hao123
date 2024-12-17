import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartabComponent } from './cartab.component';

describe('CartabComponent', () => {
  let component: CartabComponent;
  let fixture: ComponentFixture<CartabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartabComponent]
    });
    fixture = TestBed.createComponent(CartabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
