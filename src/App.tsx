import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import { ShopProvider } from './context'
import Home from './pages/home'
import Order from './pages/order'
import Orders from './pages/orders'
import CheckoutMenu from './components/checkout'
import NavBar from './components/navbar'

const AppRouters = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/men', element: <Home /> },
    { path: '/women', element: <Home /> },
    { path: '/jewelry', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/order', element: <Order /> },
    { path: '/orders', element: <Orders /> },
    { path: '*', element: <Navigate to='/' /> }
  ])
  return routes
}

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar />
        <CheckoutMenu />
        <AppRouters />
      </BrowserRouter>
    </ShopProvider>
  )
}

export default App
