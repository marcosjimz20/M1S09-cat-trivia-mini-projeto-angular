import { Injectable } from '@angular/core';

export interface User {
  nameUser: string;
  passwordUser: string;
}

@Injectable({
  providedIn: 'root'
})

export class ConnectionService {
  constructor() {}

  registerUser(user: User) {
    localStorage.setItem("usuarioLogado", JSON.stringify(user));
    return true;
  }

  isUserConnected() {
    if (localStorage.getItem("usuarioLogado")) return true;
    return false;
  }



}
