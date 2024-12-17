import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertaintabComponent } from './entertaintab.component';

describe('EntertaintabComponent', () => {
  let component: EntertaintabComponent;
  let fixture: ComponentFixture<EntertaintabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntertaintabComponent]
    });
    fixture = TestBed.createComponent(EntertaintabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
