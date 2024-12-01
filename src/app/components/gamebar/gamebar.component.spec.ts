import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamebarComponent } from './gamebar.component';

describe('GamebarComponent', () => {
  let component: GamebarComponent;
  let fixture: ComponentFixture<GamebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamebarComponent]
    });
    fixture = TestBed.createComponent(GamebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
