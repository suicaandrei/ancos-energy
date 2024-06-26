import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  @ViewChildren('animatedDivs') componentDiv: QueryList<ElementRef> | undefined;

  ngOnInit() {}

  constructor(private renderer: Renderer2, private router: Router) {}

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

  goToContact(){
    this.router.navigate(['contact']);
  }
}
