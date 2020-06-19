import { Component, OnInit, Inject } from '@angular/core';
import { MedidaPlato } from '../../../models/IMedidaPlato';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedidaPlatoService } from '../../../services/generales/medida-plato.service';

@Component({
  selector: 'app-modal-medida-plato',
  templateUrl: './modal-medida-plato.component.html',
  styleUrls: ['./modal-medida-plato.component.css']
})
export class ModalMedidaPlatoComponent implements OnInit {

  // TITULO DEL CUADRO
  public titulo: string = "NUEVA MEDIDA ARTICULO"
  // INFORMACION PREDEFINIDA PARA EL FORMULARIO 
  public medidaPlatos: MedidaPlato[] = [];
  // DEFINICION DE LA FORMA
  public forma: FormGroup;
  // OBJETO POR DEFECTO PARA LOS VALORES DE NUEVOS Y EDITAR
  public defaultObject: MedidaPlato = {
    denominacion: null,
    id: null,
  }

  constructor(
    public service: MedidaPlatoService,
    public dialogRef: MatDialogRef<ModalMedidaPlatoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    if (data) {
      this.titulo = "EDITAR MEDIDA ARTICULO"
      this.defaultObject = JSON.parse(JSON.stringify(data['informacion']))
    }
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.llenarMedidas();
  }


  private crearFormulario(): void {
    this.forma = new FormGroup({
      'denominacion': new FormControl(this.defaultObject.denominacion, Validators.required),
    });
  }

  private llenarMedidas(): void {
    this.service.getAll().subscribe(data => {
      this.medidaPlatos = data;
    })
  }

  public guardarCambios() {
    if (this.defaultObject.id) {
      this.actualizar();
    } else {
      this.crearNuevo();
    }
    this.dialogRef.close();
  }

  private crearNuevo() {
    this.service.post(this.forma.value).subscribe(data => {
      console.log("servidor responde", data)
      this.dialogRef.close({data : data})
    })
  }

  private actualizar() {
    let objetoAGuardar: MedidaPlato = {
      id: this.defaultObject.id,
      denominacion: this.forma.value.denominacion
    }
    this.service.put(this.defaultObject.id, objetoAGuardar).subscribe(data => {
      console.log("el servidor responde", data)
    })

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
