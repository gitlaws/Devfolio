import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss'],
})
export class MockComponent implements OnInit {
  darkMode = false;

  ngOnInit(): void {
    // Optionally, you can check a saved preference for dark mode and set the initial state.
    // For example, you can use localStorage to store the user's preference.
    // this.darkMode = localStorage.getItem('darkMode') === 'true';
    // this.toggleDarkMode(); // Uncomment this line if using the optional localStorage approach.
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;

    // Optionally, save the user's preference for dark mode using localStorage.
    // localStorage.setItem('darkMode', this.darkMode.toString());
  }
}
