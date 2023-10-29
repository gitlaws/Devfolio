import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ScrollComponent {
  constructor() {}

  ngOnInit(): void {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.addAnimation(scrollers);
    }
  }

  private addAnimation(scrollers: NodeListOf<Element>): void {
    scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', 'true');

      const scrollerInner = scroller.querySelector(
        '.scroller__inner'
      ) as Element;
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = (item as Element).cloneNode(true) as Element;
        duplicatedItem.setAttribute('aria-hidden', 'true');
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
}
