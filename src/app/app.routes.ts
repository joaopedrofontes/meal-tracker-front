import { Routes } from '@angular/router';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

export const routes: Routes = [
    {path: 'home', component: UserHomeComponent},
    {path: 'profile', component: UserProfileComponent},

    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
