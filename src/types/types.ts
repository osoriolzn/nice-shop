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
  filteredProducts: ProductType[]
  isCheckoutMenuOpen: boolean
  products: ProductType[]
  searchCategory: string
  shoppingCarts: ProductType[]
  closeCheckoutMenu: () => void
  openCheckoutMenu: () => void
  setFilteredProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
  setIsCheckoutMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>
  setShoppingCarts: React.Dispatch<React.SetStateAction<ProductType[]>>
}
