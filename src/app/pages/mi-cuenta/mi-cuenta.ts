import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-mi-cuenta',
  standalone: true,
  imports: [NgIf, NgStyle, RouterLink, UpperCasePipe],
  templateUrl: './mi-cuenta.html',
  styleUrl: './mi-cuenta.css'
})
export class MiCuentaComponent implements OnInit {
  usuario: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('perusurf_token');
    if (!token) {
      this.router.navigate(['/home']);
      return;
    }
    const usuarioStr = localStorage.getItem('perusurf_usuario');
    if (usuarioStr) {
      this.usuario = JSON.parse(usuarioStr);
    }
  }

  cerrarSesion(): void {
    localStorage.removeItem('perusurf_token');
    localStorage.removeItem('perusurf_usuario');
    this.router.navigate(['/login']);
  }
}
