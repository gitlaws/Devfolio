// theme.service.ts
import { Injectable } from '@angular/core';

const THEME_KEY = 'app-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme!: string;

  constructor() {
    this.loadTheme();
  }

  private loadTheme() {
    this.currentTheme = localStorage.getItem(THEME_KEY) || 'light';
    this.applyTheme();
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    localStorage.setItem(THEME_KEY, this.currentTheme);
  }

  private applyTheme() {
    document.body.classList.toggle('dark-theme', this.currentTheme === 'dark');
    document.body.classList.toggle(
      'light-theme',
      this.currentTheme === 'light'
    );
  }
}
