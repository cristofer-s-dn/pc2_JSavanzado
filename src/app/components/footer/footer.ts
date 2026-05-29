import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  anio = new Date().getFullYear();
}
