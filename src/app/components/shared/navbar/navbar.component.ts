import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserMenuComponent } from '../../user/user-menu/user-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, UserMenuComponent ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  userMenuOpen : boolean = false;

toggleUserMenu() {
  this.userMenuOpen = !this.userMenuOpen;
}
}
