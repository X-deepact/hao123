import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesliderComponent } from './gameslider.component';

describe('GamesliderComponent', () => {
  let component: GamesliderComponent;
  let fixture: ComponentFixture<GamesliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesliderComponent]
    });
    fixture = TestBed.createComponent(GamesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
