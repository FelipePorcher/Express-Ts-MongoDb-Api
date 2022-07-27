import { AccountWhatsappModel } from '@/domain/models/account-whatsapp'
import { AccountModel } from '../../models/account'

export interface AddAccountWhatsappModel {
  phone: string
  name: string
  image: string
  account: Omit<AccountModel, 'password' | 'email' >
}

export interface AddAccountWhatsapp {
  add: (accountWhatsapp: AddAccountWhatsappModel) => Promise<AccountWhatsappModel>
}
