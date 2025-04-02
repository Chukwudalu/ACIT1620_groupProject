import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/home'
import Transactions from './pages/transcations/transactions'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Auth from './pages/auth/auth'

// const dest = window.location.pathname


const router = createBrowserRouter([
  { path: '/', element: <Home/>},
  { path: '/transactions/withdraw', element: <Transactions/>},
  { path: '/transactions/deposit', element: <Transactions/>},
  { path: '/login', element: <Auth/>},
  { path: '/register', element: <Auth/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
