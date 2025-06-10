import { Routes } from '@angular/router';
import { UserHomeComponent } from './pages/user-home/user-home.component';

export const routes: Routes = [
    {path: 'home', component: UserHomeComponent},

    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
