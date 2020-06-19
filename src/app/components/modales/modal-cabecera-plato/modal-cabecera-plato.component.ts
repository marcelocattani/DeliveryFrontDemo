import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Plato } from '../../../models/IPlato';
import { CategoriaPlato } from '../../../models/ICategoriaPlato';
import { Articulo } from '../../../models/IArticulo';
import { DetallePlato } from '../../../models/IDetallePlato';
import { MedidaPlato } from '../../../models/IMedidaPlato';
import { PlatoService } from '../../../services/generales/plato.service';
import { CategoriaPlatoService } from '../../../services/generales/categoria-plato.service';
import { ArticuloService } from '../../../services/generales/articulo.service';
import { MedidaPlatoService } from '../../../services/generales/medida-plato.service';


@Component({
  selector: 'app-modal-cabecera-plato',
  templateUrl: './modal-cabecera-plato.component.html',
  styleUrls: ['./modal-cabecera-plato.component.css']
})
export class ModalCabeceraPlatoComponent implements OnInit {

  // TITULO DEL CUADRO
  public titulo: string = "NUEVA CABECERA PLATO"
  // INFORMACION PREDEFINIDA PARA EL FORMULARIO 
  public categoriPlatos: CategoriaPlato[];
  public articulos: Articulo[];
  public medidaPlatos: MedidaPlato[];
  // DEFINICION DE LA FORMA
  public forma: FormGroup;
  public forma2: FormGroup;
  // OBJETO POR DEFECTO PARA LOS VALORES DE NUEVOS Y EDITAR
  public defaultObject: Plato = {
    id: null,
    denominacion: null,
    categoriaPlato: null,
    detallePlato: [],
    imagen: null,
    precioVenta: null,
    tiempoPreparacion: null,
  }



  constructor(
    public service: PlatoService,
    public dialogRef: MatDialogRef<ModalCabeceraPlatoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoriaPlatoService: CategoriaPlatoService,
    private articuloService: ArticuloService,
    private medidaPlatoService: MedidaPlatoService,
    public dialog: MatDialog
  ) {

    if (data) {
      this.titulo = "EDITAR CABECERA PLATO"
      this.defaultObject = JSON.parse(JSON.stringify(data['informacion']))
    }
    this.crearFormulario();
  }

  ngOnInit() {
    this.llenarInformacioPredefinida();
  }

  public llenarInformacioPredefinida(): void {
    this.categoriaPlatoService.getAll().subscribe(data => {
      this.categoriPlatos = data;
    })
    this.articuloService.getAll().subscribe(data => {
      this.articulos = data;
    })
    this.medidaPlatoService.getAll().subscribe(data => {
      this.medidaPlatos = data;
    })
  }


  public crearFormulario() {
    this.forma = new FormGroup({
      'categoriaPlato': new FormControl(this.defaultObject.categoriaPlato, Validators.required),
      'denominacion': new FormControl(this.defaultObject.denominacion, Validators.required),
      'precioVenta': new FormControl(this.defaultObject.precioVenta, Validators.required),
      'tiempoPreparacion': new FormControl(this.defaultObject.tiempoPreparacion, Validators.required),
      'imagen': new FormControl(this.defaultObject.imagen, Validators.required),
    });

    this.forma2 = new FormGroup({
      'articulo': new FormControl('', Validators.required),
      'cantidad': new FormControl('', Validators.required),
      'medidaPlato': new FormControl('', Validators.required)
    });

  }

  public guardarCambios() {
    if (this.defaultObject.id) {
      this.actualizar();
    } else {
      this.crearNuevo();
    }
    this.dialogRef.close();
  }

  public crearNuevo(): void {
    const objetoAGuardar: Plato = this.forma.value;    
    objetoAGuardar.detallePlato = this.defaultObject.detallePlato;    
    this.service.post(objetoAGuardar).subscribe(data => {
      console.log("el servidor responde", data)
    })
  }

  public actualizar(): void {
    const objetoAGuardar: Plato = this.forma.value;
    objetoAGuardar.detallePlato = this.defaultObject.detallePlato;
    this.service.put(this.defaultObject.id, objetoAGuardar).subscribe(data => {
      console.log("el servidor responde", data)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  agregarDetallePlato() {
    let detalleNuevo: DetallePlato = this.forma2.value;
    this.defaultObject.detallePlato.push(detalleNuevo);
  }

  eliminarDetallePlato(indice: number) {
    this.defaultObject.detallePlato.splice(indice, 1);
  }
}
