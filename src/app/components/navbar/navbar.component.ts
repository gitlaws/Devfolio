import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  sidenavOpen = false;

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }
}
