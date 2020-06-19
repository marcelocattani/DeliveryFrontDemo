import { Injectable } from '@angular/core';
import { BaseServiceService } from './base.service';
import { MedidaPlato } from "../../models/IMedidaPlato";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedidaPlatoService extends BaseServiceService<MedidaPlato>{

  constructor(http: HttpClient) {
    super(http);
    this.miUrl = "http://localhost:9001/api/v1/medidaPlato"
  }
}
