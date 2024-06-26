import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  exports: [NavbarComponent, FooterComponent, MatIconModule, MatSidenavModule, CommonModule],
  imports: [CommonModule, MatIconModule, MatSidenavModule],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
