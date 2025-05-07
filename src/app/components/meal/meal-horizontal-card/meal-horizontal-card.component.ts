import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-horizontal-card',
  imports: [ CommonModule ],
  templateUrl: './meal-horizontal-card.component.html',
  styleUrl: './meal-horizontal-card.component.css'
})

export class MealHorizontalCardComponent {
  
  @Input() meal!: {
    name: string;
    date: string | Date;
    calories: number;
    foods: { name: string; amount: number; calories: number }[];
  };

  expanded = false;

  toggleExpanded() {
    this.expanded = !this.expanded;
  }
}
