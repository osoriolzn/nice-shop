import { NavLink } from 'react-router-dom'
import ShoppingCart from '../Cart'

function NavBar() {
  return (
    <nav className='flex justify-between items-center bg-gray-100 fixed z-10 top-0 w-full py-5 px-8 text-sm'>
      <ul className='flex items-center gap-3'>
        <li>
          <NavLink to='/'>
            <span className='text-lg font-bold'>Nice Shop</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>Hombres</NavLink>
        </li>
        <li>
          <NavLink to='/'>Mujeres</NavLink>
        </li>
        <li>
          <NavLink to='/'>Joyería</NavLink>
        </li>
        <li>
          <NavLink to='/'>Electrónicos</NavLink>
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
