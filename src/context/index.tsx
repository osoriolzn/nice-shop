import { ReactNode, createContext, useEffect, useState } from 'react'
import responseData from '../mocks/products.json'
import { ProductType, ShopContextType } from '../types/types'

const defaultContext: ShopContextType = {
  filteredProducts: [],
  isCheckoutMenuOpen: false,
  products: [],
  searchCategory: '',
  shoppingCarts: [],
  closeCheckoutMenu: () => {},
  openCheckoutMenu: () => {},
  setFilteredProducts: () => {},
  setIsCheckoutMenuOpen: () => {},
  setProducts: () => {},
  setSearchCategory: () => {},
  setShoppingCarts: () => {},
}

export const ShopContext = createContext(defaultContext)

export function ShopProvider({ children }: {children: ReactNode}) {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([])
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState<boolean>(false)
  const [products, setProducts] = useState<ProductType[]>([])
  const [searchCategory, setSearchCategory] = useState<string>('')
  const [shoppingCarts, setShoppingCarts] = useState<ProductType[]>([])
  
  useEffect(() => {
    setProducts(responseData)
  }, [])
  
  const filteredCategory = (products:ProductType[], searchCategory:string) => {
    return products?.filter(product => product.category.toLowerCase() === searchCategory.toLowerCase())
  }

  const filterProduct = (searchType:string, products:ProductType[], searchCategory:string) => {
    if (!searchType) return products

    if (searchType === 'category') {
      return filteredCategory(products, searchCategory)
    }
  }

  useEffect(() => {
    if (searchCategory) {
      const category = filterProduct('category', products, searchCategory) || []
      setFilteredProducts(category)
    }
  }, [products, searchCategory])

  const openCheckoutMenu = () => setIsCheckoutMenuOpen(true)
  const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false)

  return (
    <ShopContext.Provider
      value={{
        filteredProducts,
        isCheckoutMenuOpen,
        products,
        searchCategory,
        shoppingCarts,
        closeCheckoutMenu,
        openCheckoutMenu,
        setFilteredProducts,
        setIsCheckoutMenuOpen,
        setProducts,
        setSearchCategory,
        setShoppingCarts
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
