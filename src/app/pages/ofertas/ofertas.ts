import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass, NgStyle, CurrencyPipe, UpperCasePipe } from '@angular/common';

interface Oferta {
  id: number;
  nombre: string;
  imagen: string;
  precioOriginal: number;
  precioOferta: number;
  descuento: number;
  categoria: string;
  activa: boolean;
}

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgStyle, CurrencyPipe, UpperCasePipe],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css'
})
export class OfertasComponent {
  ofertas: Oferta[] = [
    {
      "id": 1,
      "nombre": "Tabla Minimalibu 8'0",
      "imagen": "https://www.upsurfboard.com/wp-content/uploads/Eternal-8%C2%B40-Blue_back-scaled-700x700.jpg",
      "precioOriginal": 1200,
      "precioOferta": 840,
      "descuento": 30,
      "categoria": "Tablas",
      "activa": true
    },
    {
      "id": 2,
      "nombre": "Wetsuit Invierno 4/3mm",
      "imagen": "https://m.media-amazon.com/images/I/51kZTbK5QnL._SY250_.jpg",
      "precioOriginal": 450,
      "precioOferta": 315,
      "descuento": 30,
      "categoria": "Wetsuits",
      "activa": true
    },
    {
      "id": 3,
      "nombre": "Set Quillas FCS Thruster",
      "imagen": "https://surfplaceperu.com/wp-content/uploads/2021/10/FCSII_AM_MED_QUAD_INBOARD_1200x.jpg",
      "precioOriginal": 120,
      "precioOferta": 84,
      "descuento": 30,
      "categoria": "Accesorios",
      "activa": false
    },
    {
      "id": 4,
      "nombre": "Tabla Evolutiva 6'8",
      "imagen": "https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/03801f16-1acc-4793-9dbe-adc89ec93c51?rule=hw396_70",
      "precioOriginal": 720,
      "precioOferta": 504,
      "descuento": 30,
      "categoria": "Tablas",
      "activa": true
    },
    {
      "id": 5,
      "nombre": "Wetsuit Manga Corta 2mm",
      "imagen": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjylSBIR8LSDQMA7gI_yiWTS4zgeEjeDjhi00Y6gzysXF89e6sGsS-ET_w0VxwWXOz5UsFr6pUTvMxXaCPkojjtOTViffMcapqtSkIRGrpegs5CpohdWpKf3liWb69VdjU3aIGOIo&usqp=CAc",
      "precioOriginal": 280,
      "precioOferta": 196,
      "descuento": 30,
      "categoria": "Wetsuits",
      "activa": true
    },
    {
      "id": 6,
      "nombre": "Leash para Tobillo 7ft",
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphP69fSES_evNlUwfF7D7livVYOgyC3zm4w&s",
      "precioOriginal": 65,
      "precioOferta": 45,
      "descuento": 30,
      "categoria": "Accesorios",
      "activa": false
    }
  ];

  get ofertasActivas(): number {
    return this.ofertas.filter(o => o.activa).length;
  }
}
