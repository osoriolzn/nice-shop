import { useContext } from 'react'
import { ShopContext } from '../../context'

function ShoppingCart() {
  const { shoppingCarts, openCheckoutMenu } = useContext(ShopContext)

  const openCheckout = () => {
    openCheckoutMenu()
  }

  return (
    <div className='relative flex gap-0.5 items-center' onClick={openCheckout}>
      <img
        className='cursor-pointer'
        src='src/assets/shoppingCartIcon.svg'
        alt='Shopping Cart svg'
      />
      <span className='absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-blue-500 w-4 h-4 font-semibold text-xs text-white'>
        {shoppingCarts.length}
      </span>
    </div>
  )
}

export default ShoppingCart
