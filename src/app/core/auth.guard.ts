import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthed()) return true;
  // redirige vers /login avec un query param 'redirect'
  router.navigate(['/login'], { queryParams: { redirect: '/admin' } });
  return false;
};
