import { ReactNode, createContext, useEffect, useState } from 'react'
import responseData from '../mocks/products.json'

type Product = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
  }

type ShopContextType = {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const defaultContext: ShopContextType = {
  products: [],
  setProducts: () => {}
}

export const ShopContext = createContext(defaultContext)

export function ShopProvider({ children }: {children: ReactNode}) {
  const [products, setProducts] = useState<Product[]>([])
  
  useEffect(() => {
    setProducts(responseData)
  }, [])

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
