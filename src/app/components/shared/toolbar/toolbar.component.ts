import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../services/authentication/auth-service.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public estaLogueado: boolean = true;

  public terminoBuscado: string = '';

  constructor(public authService: AuthServiceService,
    private router: Router,
    public activeRouter: ActivatedRoute) {
    // this.authService.onChangeAuthenticated().subscribe(data => this.estaLogueado = data);   
  }

  ngOnInit(): void {
  }

  public salir(): void {
    this.authService.salir()
  }


  public buscar(termino: string) {
    this.terminoBuscado = termino;
    this.router.navigate(['/menu', { termino: termino }]);
  }

  public validarRuta(): boolean {
    return !this.router.url.includes('menu');
  }

}
