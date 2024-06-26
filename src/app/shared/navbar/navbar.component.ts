import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navBarOpened = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
