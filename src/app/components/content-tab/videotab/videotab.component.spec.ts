import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotabComponent } from './videotab.component';

describe('VideotabComponent', () => {
  let component: VideotabComponent;
  let fixture: ComponentFixture<VideotabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideotabComponent]
    });
    fixture = TestBed.createComponent(VideotabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
