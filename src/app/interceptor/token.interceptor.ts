// src/app/interceptors/token.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token'); // Make sure the token key matches

  // Only set the Authorization header if the token exists
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token.replaceAll('\"', '')}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
