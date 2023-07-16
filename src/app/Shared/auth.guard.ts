import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  var token = localStorage.getItem('jwt_token');
  if(token == null){
    const router = inject(Router);
    router.navigate(['']);
    return false;
  }
  return true;
};


