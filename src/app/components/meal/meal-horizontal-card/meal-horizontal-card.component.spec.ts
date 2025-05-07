import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealHorizontalCardComponent } from './meal-horizontal-card.component';

describe('MealHorizontalCardComponent', () => {
  let component: MealHorizontalCardComponent;
  let fixture: ComponentFixture<MealHorizontalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealHorizontalCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealHorizontalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
