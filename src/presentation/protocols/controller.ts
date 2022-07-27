/* Garantir que todos os controllers criados precisam do handle */
import { HttpRequest, HttpResponse } from './http'
export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
