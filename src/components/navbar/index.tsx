import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../../context'
import ShoppingCart from '../cart'

function NavBar() {
  const { setSearchCategory } = useContext(ShopContext)
  return (
    <nav className='flex justify-between items-center bg-gray-100 fixed z-10 top-0 w-full py-5 px-8 text-sm'>
      <ul className='flex items-center gap-3'>
        <li onClick={() => setSearchCategory('')}>
          <NavLink to='/'>
            <span className='text-lg font-bold'>Nice Shop</span>
          </NavLink>
        </li>
        <li onClick={() => setSearchCategory("men's clothing")}>
          <NavLink to='/men'>Hombres</NavLink>
        </li>
        <li onClick={() => setSearchCategory("women's clothing")}>
          <NavLink to='/women'>Mujeres</NavLink>
        </li>
        <li onClick={() => setSearchCategory('jewelery')}>
          <NavLink to='/jewelry'>Joyería</NavLink>
        </li>
        <li onClick={() => setSearchCategory('electronics')}>
          <NavLink to='/electronics'>Electrónicos</NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li>
          <NavLink to='/orders'>Ordenes</NavLink>
        </li>
        <ShoppingCart />
      </ul>
    </nav>
  )
}

export default NavBar
