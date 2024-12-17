import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetabComponent } from './livetab.component';

describe('LivetabComponent', () => {
  let component: LivetabComponent;
  let fixture: ComponentFixture<LivetabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivetabComponent]
    });
    fixture = TestBed.createComponent(LivetabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
