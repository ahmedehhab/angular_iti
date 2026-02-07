import { CanActivateFn ,Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { inject } from '@angular/core';

export const gestGuard: CanActivateFn = (route, state) => {
  const authService= inject(AuthService);
  const router=inject(Router);
  if(authService.isLogin()){
    router.navigate(['/products']);
    return false;
  }
  return true;
};
