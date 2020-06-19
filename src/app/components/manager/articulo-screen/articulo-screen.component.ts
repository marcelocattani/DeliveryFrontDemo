import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo } from '../../../models/IArticulo';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ModalArticuloComponent } from '../../modales/modal-articulo/modal-articulo.component';
import { ArticuloService } from '../../../services/generales/articulo.service';
import { element } from 'protractor';

@Component({
  selector: 'app-articulo-screen',
  templateUrl: './articulo-screen.component.html',
  styleUrls: ['./articulo-screen.component.css']
})
export class ArticuloScreenComponent implements OnInit {

  public displayedColumns: string[] = ['denominacion', 'descripcion', 'stockActual', 'categoriaArticulo'];
  public dataSource: MatTableDataSource<Articulo> = new MatTableDataSource();
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public sidenavOpened: boolean = false;
  public articuloSeleccionado : Articulo = null;

  constructor(public dialog: MatDialog, public service: ArticuloService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.dataSource.data = data;
    }); //Esto debe ocurrir antes
    this.dataSource.sort = this.sort; // que esto
    this.dataSource.paginator = this.paginator; // esto luego.f
  }

  public agregarNuevo() {
    const ref = this.dialog.open(ModalArticuloComponent, { panelClass: 'custom-dialog-container' })
    ref.afterClosed().subscribe(data => {
      this.refreshData();
    })
  }

  public editar(elemento: Articulo) {
    const ref = this.dialog.open(ModalArticuloComponent, { panelClass: 'custom-dialog-container', data: { informacion: elemento } })
    ref.afterClosed().subscribe(data => {
      this.refreshData();
    })
  }

  public eliminar(element: Articulo) {
    if (confirm(`¿Esta seguro que desea eliminar ${element.denominacion}?`)) {
      this.service.delete(element.id).subscribe(data => {
        if (data) {
          this.refreshData();
        }
      }, err => {
        alert(`No puede eliminarse este elemento porque pertenece a un plato`)
      }
      )
    }
  }

  public refreshData() {
    this.service.getAll().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  public calcularPorcentaje(elemento: Articulo): number {

    if (elemento.stockMax > elemento.stockMin) {
      return ((elemento.stockActual - elemento.stockMin) * 100) / (elemento.stockMax - elemento.stockMin);
    } else {
      return 0;
    }
  }

  public verificarClase(cantidad: number): string {
    if (cantidad >= 60) {
      return 'bien'
    } else if (cantidad > 40 && cantidad < 60) {
      return 'medio'
    } else {
      return 'mal'
    }
  }

  public verDetalles(element: Articulo) {
    this.articuloSeleccionado = element;
    this.sidenavOpened = true;
  }

}
