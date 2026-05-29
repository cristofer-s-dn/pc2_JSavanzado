import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, NgStyle],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  correo = '';
  password = '';
  error = '';

  constructor(private router: Router) { }

  iniciarSesion(): void {
    this.error = '';
    if (this.correo === 'admin@perusurf.pe' && this.password === 'admin123') {
      const usuario = {
        nombre: 'Admin PERUSURF',
        correo: this.correo,
        rol: 'Administrador'
      };
      localStorage.setItem('perusurf_token', 'token_simulado_perusurf_2024');
      localStorage.setItem('perusurf_usuario', JSON.stringify(usuario));
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Credenciales incorrectas.';
    }
  }
}
