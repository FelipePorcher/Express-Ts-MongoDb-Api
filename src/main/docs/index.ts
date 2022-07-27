import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Exemplo de API Clean Node',
    description: 'Api feita em NodeJs utilizando Typescript, TDD, Clean Architecture,' +
    ' princípios SOLID e Design Patterns.',
    version: '1.0.0',
    license: {
      name: 'ISC',
      url: ''
    }
  },
  externalDocs: {
    description: '',
    url: ''
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Login',
    description: ''
  },
  {
    name: 'Conta de Whatsapp',
    description: ''
  },
  {
    name: 'Contatos',
    description: ''
  }],
  paths,
  schemas,
  components
}
