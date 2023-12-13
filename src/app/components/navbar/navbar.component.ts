import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavbarComponent implements OnInit {
  isDropdownOpen = false;

  ngOnInit(): void {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // menuBtn!: HTMLElement;
  // menuItems!: HTMLElement;
  // menuItem!: NodeListOf<Element>;

  // constructor() {}

  // ngOnInit(): void {
  //   this.menuBtn = document.querySelector('.menu-btn')!;
  //   this.menuItems = document.querySelector('.menu-items')!;
  //   this.menuItem = document.querySelectorAll('.menu-item');

  //   if (this.menuBtn) {
  //     this.menuBtn.addEventListener('click', () => {
  //       this.toggle();
  //     });
  //   }

  //   this.menuItem.forEach((item) => {
  //     item.addEventListener('click', () => {
  //       if (this.menuBtn && this.menuBtn.classList.contains('open')) {
  //         this.toggle();
  //       }
  //     });
  //   });
  // }

  // toggle() {
  //   if (this.menuBtn) {
  //     this.menuBtn.classList.toggle('open');
  //   }
  //   if (this.menuItems) {
  //     this.menuItems.classList.toggle('open');
  //   }
  // }
}
