import { AccountWhatsappModel } from '@/domain/models/account-whatsapp'
import { ContactModel } from '@/domain/models/contact'

export interface AddContactModel {
  phone: string
  name: string
  image: string
  dateCreated: Date
  accountWhatsapp: Omit<AccountWhatsappModel, 'image' | 'name' >
}

export interface AddContact {
  add: (contact: AddContactModel) => Promise<ContactModel>
}
