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

export type OrderType = {
  id: `${string}-${string}-${string}-${string}-${string}`
  date: string,
  items: ProductType[]
  totalItems: number
  totalPrice: number
}

export type ShopContextType = {
  filteredProducts: ProductType[]
  isCheckoutMenuOpen: boolean
  orders: OrderType[]
  products: ProductType[]
  searchCategory: string
  shoppingCarts: ProductType[]
  closeCheckoutMenu: () => void
  openCheckoutMenu: () => void
  setFilteredProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
  setIsCheckoutMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  setOrders: React.Dispatch<React.SetStateAction<OrderType[]>>
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>
  setShoppingCarts: React.Dispatch<React.SetStateAction<ProductType[]>>
}
