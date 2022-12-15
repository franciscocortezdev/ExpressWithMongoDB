import { Auth } from "./authInterface";

export interface UserInterface  extends Auth{
  nombre: string,
  apellido: string,
}
