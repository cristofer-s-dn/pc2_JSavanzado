import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf, NgFor, NgClass, NgStyle, CurrencyPipe, UpperCasePipe } from '@angular/common';

interface Estadistica {
  totalProductos: number;
  totalVentas: number;
  ingresosMes: number;
  clientesActivos: number;
}

interface Pedido {
  id: number;
  cliente: string;
  producto: string;
  monto: number;
  estado: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgStyle, RouterLink, CurrencyPipe, UpperCasePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  usuario: any = null;

  estadisticas: Estadistica = {
    totalProductos: 8,
    totalVentas: 47,
    ingresosMes: 24350,
    clientesActivos: 132
  };

  pedidosRecientes: Pedido[] = [
    { id: 1001, cliente: 'Carlos Mendoza', producto: 'Tabla Shortboard Pro', monto: 850, estado: 'Entregado' },
    { id: 1002, cliente: 'Ana Torres', producto: 'Wetsuit Full 3/2mm', monto: 450, estado: 'En camino' },
    { id: 1003, cliente: 'Luis Quispe', producto: 'Leash 9ft Competition', monto: 65, estado: 'Pendiente' },
    { id: 1004, cliente: 'Sofia Ramirez', producto: 'Tabla Longboard Classic', monto: 1200, estado: 'Entregado' }
  ];

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

  estadoClase(estado: string): string {
    if (estado === 'Entregado') return 'badge bg-success';
    if (estado === 'En camino') return 'badge bg-warning text-dark';
    return 'badge bg-secondary';
  }
}
