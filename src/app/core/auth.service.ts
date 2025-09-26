import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token = signal<string | null>(null);
  readonly isAuthed = () => this._token() !== null;

  login(username: string, password: string) {
    // fake check
    if (username && password) this._token.set('fake-token');
    return this.isAuthed();
  }

  logout() {
    this._token.set(null);
  }
}
