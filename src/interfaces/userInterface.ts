import { AuthInterface } from "./authInterface"

export interface UserInterface extends AuthInterface {
  nombre: string
  apellido: string
}
