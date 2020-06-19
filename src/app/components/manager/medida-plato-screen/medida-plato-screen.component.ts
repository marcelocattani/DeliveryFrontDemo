import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MedidaPlato } from '../../../models/IMedidaPlato';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MedidaPlatoService } from '../../../services/generales/medida-plato.service';
import { ModalMedidaPlatoComponent } from '../../modales/modal-medida-plato/modal-medida-plato.component';

@Component({
  selector: 'app-medida-plato-screen',
  templateUrl: './medida-plato-screen.component.html',
  styleUrls: ['./medida-plato-screen.component.css']
})
export class MedidaPlatoScreenComponent implements OnInit {

  // NOMBRE DE REFERENCIA A COLUMNAS
  public displayedColumns: string[] = ['denominacion'];
  //OBJETO DE DATOS DE LA TABLA
  public dataSource: MatTableDataSource<MedidaPlato> = new MatTableDataSource();
  //DEFINICION DE ELEMENTOS DE PAGINACION Y SORTING
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private servicio: MedidaPlatoService) {
  }

  ngOnInit(): void {
    this.referenciarTabla();
  }

  public referenciarTabla(): void {
    this.servicio.getAll().subscribe(data => {
      this.dataSource.data = data;
    })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public agregarNuevo() {
    let ref = this.dialog.open(ModalMedidaPlatoComponent, { panelClass: 'custom-dialog-container' });
    ref.afterClosed().subscribe(data => {
      this.refreshData();
    });
  }

  public editar(medidaPlato: MedidaPlato) {
    let ref = this.dialog.open(ModalMedidaPlatoComponent, { panelClass: 'custom-dialog-container', data: { informacion: medidaPlato } });
    ref.afterClosed().subscribe(data => {
      this.refreshData();
    });
  }

  public eliminar(medidaPlato: MedidaPlato) {
    if (confirm(`¿Esta seguro que desea eliminar ${medidaPlato.denominacion}?`)) {
      this.servicio.delete(medidaPlato.id).subscribe(data => {
        if (data) {
          this.refreshData();
        }
      },err => {
        alert(`No puedes eliminar ${medidaPlato.denominacion} porque un Detalle Plato lo tiene asignado`)
      })
    }
  }

  public refreshData(): void {
    this.servicio.getAll().subscribe(data => {
      this.dataSource.data = data;
    })
  }
}
