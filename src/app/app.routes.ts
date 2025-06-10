import { Routes } from '@angular/router';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserAccountConfigComponent } from './pages/user-account-config/user-account-config.component';

export const routes: Routes = [
    {path: 'home', component: UserHomeComponent},
    {path: 'config', component: UserAccountConfigComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
