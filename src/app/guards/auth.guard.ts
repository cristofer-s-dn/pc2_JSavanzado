import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('perusurf_token');
  if (token) {
    return true;
  }
  router.navigate(['/home']);
  return false;
};
