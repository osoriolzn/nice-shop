import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import { ShopProvider } from './context'

import Home from './pages/home'
import Order from './pages/order'
import Orders from './pages/ordes'

import NavBar from './components/navbar'

const AppRouters = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
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
        <AppRouters />
      </BrowserRouter>
    </ShopProvider>
  )
}

export default App
