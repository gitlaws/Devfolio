import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('10s', style({ transform: 'translateX(-100%)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(-100%)' }),
        animate('10s', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class ScrollComponent {}
