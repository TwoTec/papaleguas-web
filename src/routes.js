import Login from './components/Login'

import Cadastro  from './components/cliente/Cadastro'

export const routes = [
  {
    path: '',
    component: Login
  },
  {
    path: '/cliente/cadastro',
    component: Cadastro

  }
]
