import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SporttabComponent } from './sporttab.component';

describe('SporttabComponent', () => {
  let component: SporttabComponent;
  let fixture: ComponentFixture<SporttabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SporttabComponent]
    });
    fixture = TestBed.createComponent(SporttabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
