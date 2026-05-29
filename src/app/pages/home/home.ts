import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgStyle, UpperCasePipe } from '@angular/common';

interface Categoria {
  nombre: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, NgStyle, UpperCasePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  tituloPrincipal = 'Bienvenido a PERUSURF';
  subtitulo = 'Equipamiento de primer nivel para tu próxima sesión en el mar';

  categorias: Categoria[] = [
    {
      nombre: 'Tablas',
      descripcion: 'Shortboards, Longboards y Fish para todo nivel de surfista.',
      icono: 'T'
    },
    {
      nombre: 'Wetsuits',
      descripcion: 'Trajes de neopreno para el frio del Pacífico peruano.',
      icono: 'W'
    },
    {
      nombre: 'Accesorios',
      descripcion: 'Leashes, ceras, quillas y todo lo que necesitas.',
      icono: 'A'
    }
  ];
}
