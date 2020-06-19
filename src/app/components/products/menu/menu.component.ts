import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plato } from '../../../models/IPlato';
import { CategoriaPlato } from '../../../models/ICategoriaPlato';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../../../services/authentication/auth-service.service';
import { PlatoService } from '../../../services/generales/plato.service';
import { CategoriaPlatoService } from '../../../services/generales/categoria-plato.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // CATEGORIA SELECCIONADA 
  public selected = 0;
  // para validar la existencia de un usuario logueado 
  
  // Valores mostrados por pantalla
  public categorias: CategoriaPlato[] = [];
  public platos: Plato[] = [];
  //Guarda una copia de la busqueda para evitar tener que repetir el getall
  public bk: Plato[] = [];
  //termino de busqueda
  public termino: string = '';
  //muestra o no el sidenav
  public sidenavOpened: boolean = false;


  constructor(private activeRoute: ActivatedRoute,
    private platoService: PlatoService,
    private categoriaPlatoService: CategoriaPlatoService,
    public authService: AuthServiceService) {

    let termino = this.activeRoute.snapshot.params['termino'];
    if (termino) {
      this.cargarPlatosPor(termino)
    } else {
      this.cargarPlatos();
    }
  }

  ngOnInit(): void {
    this.cargarDatos();

  }

  public cargarPlatosPor(termino: string) {
    this.platoService.getAll().subscribe(data => {
      this.platos = data.filter(elemento => {
        if (elemento.denominacion.toLowerCase().includes(termino.toLowerCase()) ||
          elemento.categoriaPlato.denominacion.toLowerCase().includes(termino.toLowerCase())) {
          return true;
        }
        return false;
      });
    })
    this.sidenavOpened = false;
  }

  public cargarDatos(): void {
    this.categoriaPlatoService.getAll().subscribe(data => {
      this.categorias = data;
    })
  }

  public cargarPlatos() {
    this.platoService.getAll().subscribe(data => {
      this.platos = data;
      this.bk = data;
    })
  }

  public cambioSeleccion(event) {
    this.sidenavOpened = false;
    this.platos = this.bk;
    if (event.value != 0) {
      console.log(event.value)
      this.platos = this.platos.filter(e => e.categoriaPlato.id == event.value)
    }
  }


}
