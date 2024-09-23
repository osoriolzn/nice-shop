import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context'
import { ProductType } from '../../types/types'
import OrderCard from '../order-card'

function CheckoutMenu() {
  const {
    isCheckoutMenuOpen,
    orders,
    shoppingCarts,
    closeCheckoutMenu,
    setSearchCategory,
    setShoppingCarts
  } = useContext(ShopContext)

  const handleDelete = (id: number) => {
    const filteredItems = shoppingCarts.filter(item => item.id !== id)
    setShoppingCarts(filteredItems)
  }

  const handleCheckout = () => {
    const date = new Date().toISOString()

    const orderToAdd = {
      id: crypto.randomUUID(),
      date: date,
      items: shoppingCarts,
      totalItems: shoppingCarts.length,
      totalPrice: totalPrice(shoppingCarts)
    }
    
    const addOrder = [...orders, orderToAdd]
    const saveOrderJson = JSON.stringify(addOrder)
    localStorage.setItem('orders', saveOrderJson)

    closeCheckoutMenu()
    setSearchCategory('')
    setShoppingCarts([])
  }

  const totalPrice = (items:ProductType[]) => {
    let sum = 0
    items.forEach(item => { sum += item.price })
    return sum
  }

  return (
    <aside
      className={`${isCheckoutMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-68px)] top z-20`}
    >
      <div className='flex justify-between items-center px-2 mr-6 m-2'>
        <h2 className='font-medium text-xl py-2'>Mi Orden</h2>
        <span onClick={closeCheckoutMenu}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="cursor-pointer text-blue-500">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M10 10l4 4m0 -4l-4 4" />
          </svg>
        </span>
      </div>

      <div className='py-2 px-2 overflow-y-scroll flex-1'>
        {
          shoppingCarts.map(item => (
            <OrderCard
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.image}
              price={item.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>

      <div className='pl-2 pr-6 mb-2'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium'>${totalPrice(shoppingCarts)}</span>
        </p>
          <Link to='/orders'>
            <button
              className='text-xl font-medium bg-gray-700 text-white py-2 w-full rounded-lg'
              onClick={handleCheckout}
            >
              Pagar
            </button>
          </Link>
      </div>
    </aside>
  )
}

export default CheckoutMenu
