import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navBarOpened = false;
  lastScrollPos = 0;

  @ViewChild('navbar') componentDiv: ElementRef | undefined;

  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elementRef = this.componentDiv!.nativeElement;

    var currentScrollPos = window.scrollY;

    if (currentScrollPos > this.lastScrollPos) {
      // Scrolling down
      this.renderer.addClass(elementRef, 'hidden');
      this.renderer.removeClass(elementRef, 'flex');
    } else {
      if (currentScrollPos < 0) currentScrollPos = 0;

      // Scrolling up
      this.renderer.addClass(elementRef, 'flex');
      this.renderer.removeClass(elementRef, 'hidden');
    }

    this.lastScrollPos = currentScrollPos;
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
