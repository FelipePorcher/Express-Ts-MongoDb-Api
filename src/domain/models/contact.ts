import { AccountWhatsappModel } from './account-whatsapp'

export interface ContactModel {
  id: string
  phone: string
  name: string
  image: string
  dateCreated: Date
  accountWhatsapp: Omit<AccountWhatsappModel, 'image' | 'name' >
}
