import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass, NgStyle, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgStyle, FormsModule, CurrencyPipe, UpperCasePipe],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
  providers: [CurrencyPipe]
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  categorias: string[] = [];
  categoriaSeleccionada = 'Todas';
  terminoBusqueda = '';
  cargando = true;
  error = '';

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe({
      next: (data: Producto[]) => {
        this.productos = data;
        this.productosFiltrados = data;
        const cats = new Set(data.map(p => p.categoria));
        this.categorias = ['Todas', ...Array.from(cats)];
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudo conectar con el servidor. Verifique que JSON Server este corriendo en http://localhost:3000';
        this.cargando = false;
      }
    });
  }

  filtrarPorCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    let resultado = this.productos;
    if (this.categoriaSeleccionada !== 'Todas') {
      resultado = resultado.filter(p => p.categoria === this.categoriaSeleccionada);
    }
    if (this.terminoBusqueda.trim()) {
      const termino = this.terminoBusqueda.toLowerCase();
      resultado = resultado.filter(p => p.nombre.toLowerCase().includes(termino));
    }
    this.productosFiltrados = resultado;
  }

  stockBadgeClase(stock: number): object {
    return {
      'text-danger fw-bold': stock <= 3,
      'text-warning fw-bold': stock > 3 && stock <= 8,
      'text-success': stock > 8
    };
  }

  cardBordeClase(stock: number): object {
    return {
      'border-danger': stock <= 3,
      'border-success': stock > 3
    };
  }
}
