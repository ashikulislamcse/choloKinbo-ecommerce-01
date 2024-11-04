import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './components/layout/RootLayout.jsx'
import About from './Pages/About.jsx'
import Cart from './Pages/Cart.jsx'
import Contact from './Pages/Contact.jsx'
import Offers from './Pages/Offers.jsx'
import Product from './Pages/Product.jsx'
import Profile from './Pages/Profile.jsx'
import Signin from './Pages/Signin.jsx'
import Signup from './Pages/Signup.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import Shope from './Pages/Shope.jsx'
import Orders from './Pages/Orders.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout/>,
    children: [
      {path:'/',element:<App/>},
      {path:'/about',element:<About/>},
      {path:'/cart',element:<Cart/>},
      {path:'/contact',element:<Contact/>},
      {path:'/offers',element:<Offers/>},
      {path:'/orders',element:<Orders/>},
      {path:'/product',element:<Product/>},
      {path:'/profile',element:<Profile/>},
      {path:'/shope',element:<Shope/>},
      {path:'/signin',element:<Signin/>}, 
      {path:'/signup',element:<Signup/>},
      {path:"/product/:id",element:<SingleProduct/>},
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
