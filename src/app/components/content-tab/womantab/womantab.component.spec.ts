import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomantabComponent } from './womantab.component';

describe('WomantabComponent', () => {
  let component: WomantabComponent;
  let fixture: ComponentFixture<WomantabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomantabComponent]
    });
    fixture = TestBed.createComponent(WomantabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
