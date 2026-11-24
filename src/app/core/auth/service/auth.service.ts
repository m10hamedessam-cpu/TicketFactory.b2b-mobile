import { Login } from './../login/login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly STRONG_KEY = 'isLoggedIN';
  isLoggedIn(): boolean {
    return localStorage.getItem(this.STRONG_KEY) === 'true';
  }
  Login(): void {
    localStorage.setItem(this.STRONG_KEY, 'true');
  }
  logout(): void {
    localStorage.removeItem(this.STRONG_KEY);
  }
}
