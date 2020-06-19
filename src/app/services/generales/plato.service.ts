import { Injectable } from '@angular/core';
import { BaseServiceService } from './base.service';
import { Plato } from "../../models/IPlato";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatoService extends BaseServiceService<Plato> {

  constructor(http: HttpClient) {
    super(http);
    this.miUrl = "http://localhost:9001/api/v1/plato"
  }
}
