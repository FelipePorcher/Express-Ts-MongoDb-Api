import { AccountModel } from './account'

export interface AccountWhatsappModel {
  id: number
  phone: string
  name: string
  image: string
  account: Omit<AccountModel, 'password' | 'email' >
}
