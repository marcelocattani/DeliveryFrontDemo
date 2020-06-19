import { Persona } from './IPersona';
import { Rol } from './IRol';

export interface Usuario extends Persona{
    password ?: string,
    rol : Rol
}