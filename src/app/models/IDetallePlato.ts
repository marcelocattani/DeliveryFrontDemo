import { Articulo } from './IArticulo';
import { MedidaPlato } from './IMedidaPlato';

export interface DetallePlato {
    id: number
    cantidad: number,
    articulo: Articulo[],
    medidaPlato: MedidaPlato
}