import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  iframeHeight = 1710;

  ngOnInit() {
    let width = window.innerWidth;

    if (width > 400 && width < 550) {
      this.iframeHeight = 1560;
    } else if (width > 500) {
      this.iframeHeight = 1560;
    } else {
      this.iframeHeight = 1710;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let width = event.target.innerWidth;

    if (width > 400 && width < 550) {
      this.iframeHeight = 1560;
    } else if (width > 500) {
      this.iframeHeight = 1560;
    } else {
      this.iframeHeight = 1710;
    }
  }
}
