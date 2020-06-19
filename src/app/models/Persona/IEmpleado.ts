import { Usuario } from './IUsuario';
export interface Empleado extends Usuario{
    dni : number,
    fechaIngreso : Date,
    estaActivo : boolean
}