import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public logueado: boolean;
  public logged: EventEmitter<boolean>;

  constructor(private router : Router) {
    this.logged = new EventEmitter();
  }

  public ingresar(): void {
    console.log("sesion abierta")
    this.logueado = true;
    this.logged.emit(true)
  }

  public salir(): void {
    console.log("sesion cerrada")
    this.logueado = false;
    this.logged.emit(false);
    this.router.navigate(['/home'])
  }

  public estaLogueado(): EventEmitter<boolean> {
    return this.logged;
  }


}
