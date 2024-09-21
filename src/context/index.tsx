import { ReactNode, createContext, useEffect, useState } from 'react'
import responseData from '../mocks/products.json'
import { ProductType, ShoppingCartType, ShopContextType } from './types'

const defaultContext: ShopContextType = {
  products: [],
  shoppingCarts: [],
  setProducts: () => {},
  setShoppingCarts: () => {},
}

export const ShopContext = createContext(defaultContext)

export function ShopProvider({ children }: {children: ReactNode}) {
  const [products, setProducts] = useState<ProductType[]>([])
  const [shoppingCarts, setShoppingCarts] = useState<ShoppingCartType[]>([])
  
  useEffect(() => {
    setProducts(responseData)
  }, [])

  return (
    <ShopContext.Provider
      value={{
        products,
        shoppingCarts,
        setProducts,
        setShoppingCarts
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
