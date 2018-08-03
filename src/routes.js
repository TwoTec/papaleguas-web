import Login from './components/Login'
import Cadastro  from './components/cliente/Cadastro'
import veiculo from './components/veiculo/Veiculo'
import Homeveiculo from './components/veiculo/Home'
import Home from './components/home/Home'

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
    path:'/veiculo',
    component: Homeveiculo
  },

]
