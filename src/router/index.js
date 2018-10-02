import Vue from 'vue'
import Router from 'vue-router'
//Login - Register

const Log = () => import('@/auth/Login')
const Reg = () => import('@/auth/Register')


const Home = () => import('@/auth/Home')

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')


const Main = () => import('@/customers/Main')


const List = () => import('@/customers/List')

const Profile = () => import('@/customers/Profile')

const Order = () => import('@/order/Order')

const Cloth = () => import('@/cloth/Cloth')

const Clothdetail = () => import('@/cloth/Detail')



const Pant = () => import('@/pant/Pant')

const Pantdetail = () => import('@/pant/Detail')

const Coat = () => import('@/coat/Coat')

const Coatdetail = () => import('@/coat/Detail')

const Waistcoat = () => import('@/waistcoat/Waistcoat')

const Waistcoatdetail = () => import('@/waistcoat/Detail')

const Shirt = () => import('@/shirt/Shirt')

const Shirtdetail = () =>  import('@/shirt/Detail')

const Setting = () => import('@/setting/Setting');

// Views

// const Login = () => import('@/views/pages/Login')
// const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path : '/',
      name : 'Login',
      component : Log

    },
    {
      path: '/register',
      name: 'Register',
      component: Reg,
      meta : {
        requiresAuth : true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta : {
        requiresAuth : true
      }

    },
   
    
    {
      path: '/',
      redirect: '/main',
      component: DefaultContainer,
      children: [
        {
          path: 'main',
          redirect : '/main/list',
          component: Main,
          children : [
            {
              path : '/main/list',
              component : List ,
              name : 'list'
            },
            // {
            //   path : '/main/profile/:id',
            //   component : Profile,
            //   name : 'profile'
            // },
            {
              path : '/main/setting',
              component : Setting,
              name : 'setting'
            }
          ]
          
        },
        {
          path : 'order/:id',
          redirect : '/order/:id/profile',
          name : 'order',
          component : Order,
          children : [
            {
              path : '/order/:id/profile',
              component : Profile,
              name : 'profile'
            },
            {
              path : '/order/:id/cloth',
              component : Cloth ,
              name : 'cloth'
            },
            {
              path : '/order/:id/cloth/:clothId',
              component : Clothdetail ,
              name : 'clothdetail'


            },
            {
              path : '/order/:id/pant',
              component : Pant ,
              name : 'pant'
            },
            {
              path : '/order/:id/pant/:pantId',
              component : Pantdetail,
              name : 'pantdetail'

            },
            {
              path : '/order/:id/coat',
              component : Coat ,
              name : 'coat'
            },
            {
              path : '/order/:id/coat/:coatId',
              component : Coatdetail ,
              name : 'coatdetail'

            },
            {
              path : '/order/:id/waistcoat',
              component : Waistcoat ,
              name : 'waistcoat'
            },
            {
              path : '/order/:id/waistcoat/:waistId',
              component : Waistcoatdetail ,
              name : 'waistcoatdetail'

            },
            {
              path : '/order/:id/shirt',
              component : Shirt,
              name : 'shirt'
            },
            {
              path : '/order/:id/shirt/:shirtId',
              component : Shirtdetail,
              name : 'shirtdetail'
            }
            
          ]

        }
        





       
      ]
    },
    
  ]
})
