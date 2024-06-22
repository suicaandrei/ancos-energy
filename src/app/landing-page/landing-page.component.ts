import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  @ViewChildren('animatedDivs') componentDiv: QueryList<ElementRef> | undefined;

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
