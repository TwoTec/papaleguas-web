import Login from './components/Login'

import CadastroCliente  from './components/cliente/CadastroCliente'

export const routes = [
  {
    path: '',
    component: Login
  },
  {
    path: '/cadastro/cliente',
    component: CadastroCliente

  }
]
