import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, NgIf, NgStyle, UpperCasePipe],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {
  nombre = '';
  correo = '';
  asunto = '';
  mensaje = '';
  enviado = false;
  mostrarFormulario = true;

  get formularioValido(): boolean {
    return !!(this.nombre && this.correo && this.asunto && this.mensaje);
  }

  enviarMensaje(): void {
    if (this.formularioValido) {
      this.enviado = true;
      this.mostrarFormulario = false;
    }
  }

  nuevoMensaje(): void {
    this.nombre = '';
    this.correo = '';
    this.asunto = '';
    this.mensaje = '';
    this.enviado = false;
    this.mostrarFormulario = true;
  }
}
