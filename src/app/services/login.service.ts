import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  //Criar backend
  public login(email: string, password: string) {
    return this.httpClient
      .post<LoginResponse>('/login', { email, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem(`token`, value.token),
            sessionStorage.setItem(`username`, value.username);
        })
      );
  }
}
