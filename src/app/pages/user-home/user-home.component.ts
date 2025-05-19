import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/shared/sidebar/sidebar.component';
import { MealHorizontalCardComponent } from '../../components/meal/meal-horizontal-card/meal-horizontal-card.component';

@Component({
  selector: 'app-user-home',
  imports: [ CommonModule, SidebarComponent, MealHorizontalCardComponent ],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {


  //sample:
  meals = [
    {
      name: 'Café da manhã',
      date: new Date(),
      calories: 220,
      foods: [
        { name: 'Pão', amount: 50, calories: 130 },
        { name: 'Queijo', amount: 30, calories: 90 }
      ]
    },
    {
      name: 'Almoço',
      date: new Date(),
      calories: 700,
      foods: [
        { name: 'Arroz', amount: 150, calories: 200 },
        { name: 'Feijão', amount: 100, calories: 120 },
        { name: 'Frango grelhado', amount: 200, calories: 300 }
      ]
    },
    {
      name: 'Lanche',
      date: new Date(),
      calories: 700,
      foods: [
        { name: 'Banana', amount: 150, calories: 200 },
        { name: 'whey', amount: 250, calories: 300 }
      ]
    },
    {
      name: 'Almoço',
      date: new Date(),
      calories: 700,
      foods: [
        { name: 'Arroz', amount: 150, calories: 200 },
        { name: 'Feijão', amount: 100, calories: 120 },
        { name: 'Frango grelhado', amount: 200, calories: 300 }
      ]
    }
  ];
}
