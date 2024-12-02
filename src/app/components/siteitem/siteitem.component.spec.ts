import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteitemComponent } from './siteitem.component';

describe('SiteitemComponent', () => {
  let component: SiteitemComponent;
  let fixture: ComponentFixture<SiteitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteitemComponent]
    });
    fixture = TestBed.createComponent(SiteitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
