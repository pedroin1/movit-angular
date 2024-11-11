import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = sessionStorage.getItem('token');
  console.log(token);

  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
