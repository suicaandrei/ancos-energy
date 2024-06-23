import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  @ViewChildren('animatedDivs') componentDiv: QueryList<ElementRef> | undefined;

  ngOnInit() {}

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.componentDiv!.forEach((element) => {
      const elementRef = element.nativeElement;

      var rect = elementRef.getBoundingClientRect();

      var viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      var threshold = viewportHeight * 0.3;

      if (rect.bottom >= threshold && rect.top <= viewportHeight) {
        this.renderer.addClass(elementRef, 'animated-visible');
      }
    });
  }
}
