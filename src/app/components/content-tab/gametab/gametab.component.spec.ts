import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GametabComponent } from './gametab.component';

describe('GametabComponent', () => {
  let component: GametabComponent;
  let fixture: ComponentFixture<GametabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GametabComponent]
    });
    fixture = TestBed.createComponent(GametabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
