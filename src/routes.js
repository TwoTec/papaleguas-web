import Login from './components/Login'
import Cadastro  from './components/cliente/Cadastro'
import Home from './components/Home'

export const routes = [
  {
    path: '',
    component: Login
  },
  {
    path: '/cliente/cadastro',
    component: Cadastro
  },
  {
    path: '/home',
    component: Home
  }
]
