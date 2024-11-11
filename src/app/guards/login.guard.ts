import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('username');
  return true;
};
