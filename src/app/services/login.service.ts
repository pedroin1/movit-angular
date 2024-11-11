import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private BACKEND_URL_MOCK = 'https://dummyjson.com/auth';
  private BACKEND_URL = 'https://localhost/8080/movit';

  constructor(private httpClient: HttpClient) {}

  //Criar backend
  public login(email: string, password: string) {
    return this.httpClient
      .post<LoginResponse>(`${this.BACKEND_URL_MOCK}/login`, {
        username: 'emilys',
        password: 'emilyspass',
      })
      .pipe(
        tap((value) => {
          sessionStorage.setItem(`token`, value.accessToken),
            sessionStorage.setItem(`username`, value.firstName);
        })
      );
  }

  public cadastro(name: string, email: string, password: string) {
    return this.httpClient
      .post<LoginResponse>('/cadastro', { name, email, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem(`token`, value.accessToken),
            sessionStorage.setItem(`username`, value.firstName);
        })
      );
  }
}
