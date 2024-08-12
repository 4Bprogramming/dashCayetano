// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Usuarios',
      icon: PeopleOutlineIcon,
      path: '/typography'
    },
    {
      title: 'Crédito',
      path: '/icons',
      icon: CreditCardIcon
    },
    {
      title: 'Facturas',
      icon: Table,
      path: '/facturas'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
   
   
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    },
    {
      title: 'Añadir Usuario',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
   
  ]
}

export default navigation
