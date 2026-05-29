import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
  encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent implements OnInit {
  ngOnInit(): void {
    const container = document.getElementById('starsField');
    if (!container) return;
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2.5 + 0.8;
      star.className = 'star';
      star.style.cssText = `
        width:${size}px; height:${size}px;
        top:${Math.random() * 55}%;
        left:${Math.random() * 100}%;
        animation-delay:${Math.random() * 3}s;
        animation-duration:${2 + Math.random() * 3}s
      `;
      container.appendChild(star);
    }
  }
}
