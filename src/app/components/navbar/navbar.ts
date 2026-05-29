import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgStyle, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgStyle, NgIf],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  menuAbierto = false;

  get estaLogueado(): boolean {
    return !!localStorage.getItem('perusurf_token');
  }

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }
}
