import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./pages/productos/productos').then(m => m.ProductosComponent)
  },
  {
    path: 'tienda',
    loadComponent: () =>
      import('./pages/productos/productos').then(m => m.ProductosComponent)
  },
  {
    path: 'ofertas',
    loadComponent: () =>
      import('./pages/ofertas/ofertas').then(m => m.OfertasComponent)
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto').then(m => m.ContactoComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then(m => m.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: 'mi-cuenta',
    loadComponent: () =>
      import('./pages/mi-cuenta/mi-cuenta').then(m => m.MiCuentaComponent),
    canActivate: [authGuard]
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then(m => m.NotFoundComponent)
  }
];
