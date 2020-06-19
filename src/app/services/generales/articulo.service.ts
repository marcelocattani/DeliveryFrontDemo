import { Injectable } from '@angular/core';
import { BaseServiceService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../../models/IArticulo';



@Injectable({
  providedIn: 'root'
})
export class ArticuloService extends BaseServiceService<Articulo>{

  constructor(http: HttpClient) { 
    super(http);
    this.miUrl = "http://localhost:9001/api/v1/articulo"
  }
}
