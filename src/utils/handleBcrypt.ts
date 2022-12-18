import { hash, compare } from "bcrypt"

export const encrypt = (password: string):Promise<string> => {
  return hash(password, 6)
}

export const decrypt = (password: string, hash: string):Promise<boolean> => {
  return compare(password, hash)
}
