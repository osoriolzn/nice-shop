export type ProductType = {
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

export type ShopContextType = {
  isCheckoutMenuOpen: boolean
  products: ProductType[]
  shoppingCarts: ProductType[]
  closeCheckoutMenu: () => void
  openCheckoutMenu: () => void
  setIsCheckoutMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
  setShoppingCarts: React.Dispatch<React.SetStateAction<ProductType[]>>
}
