import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuBtn!: HTMLElement;
  menuItems!: HTMLElement;
  menuItem!: NodeListOf<Element>;

  constructor() {}

  ngOnInit(): void {
    this.menuBtn = document.querySelector('.menu-btn')!;
    this.menuItems = document.querySelector('.menu-items')!;
    this.menuItem = document.querySelectorAll('.menu-item');

    if (this.menuBtn) {
      this.menuBtn.addEventListener('click', () => {
        this.toggle();
      });
    }

    this.menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        if (this.menuBtn && this.menuBtn.classList.contains('open')) {
          this.toggle();
        }
      });
    });
  }

  toggle() {
    if (this.menuBtn) {
      this.menuBtn.classList.toggle('open');
    }
    if (this.menuItems) {
      this.menuItems.classList.toggle('open');
    }
  }
}
