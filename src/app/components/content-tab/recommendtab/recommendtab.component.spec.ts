import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendtabComponent } from './recommendtab.component';

describe('RecommendtabComponent', () => {
  let component: RecommendtabComponent;
  let fixture: ComponentFixture<RecommendtabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendtabComponent]
    });
    fixture = TestBed.createComponent(RecommendtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
