import { ReactNode, createContext, useEffect, useState } from 'react'
import responseData from '../mocks/products.json'
import { ProductType, ShopContextType } from '../types/types'

const defaultContext: ShopContextType = {
  isCheckoutMenuOpen: false,
  products: [],
  shoppingCarts: [],
  closeCheckoutMenu: () => {},
  openCheckoutMenu: () => {},
  setIsCheckoutMenuOpen: () => {},
  setProducts: () => {},
  setShoppingCarts: () => {},
}

export const ShopContext = createContext(defaultContext)

export function ShopProvider({ children }: {children: ReactNode}) {
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState<boolean>(false)
  const [products, setProducts] = useState<ProductType[]>([])
  const [shoppingCarts, setShoppingCarts] = useState<ProductType[]>([])
  
  useEffect(() => {
    setProducts(responseData)
  }, [])
  
  const openCheckoutMenu = () => setIsCheckoutMenuOpen(true)
  const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false)

  return (
    <ShopContext.Provider
      value={{
        isCheckoutMenuOpen,
        products,
        shoppingCarts,
        closeCheckoutMenu,
        openCheckoutMenu,
        setIsCheckoutMenuOpen,
        setProducts,
        setShoppingCarts
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
