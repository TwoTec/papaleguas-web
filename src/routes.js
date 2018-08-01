import Login from './components/Login'
import Cadastro  from './components/cliente/Cadastro'
import Home from './components/Home'
import veiculo from './components/veiculo/veiculo'
import Index from './components/home/Home'

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
  },
  {
    path:'/veiculo/cadastro',
    component: veiculo
  },
  {
    path:'/index/home',
    component: Index
  }
]
