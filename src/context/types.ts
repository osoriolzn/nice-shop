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

export type ShoppingCartType = {
  quantity: number
}

export type ShopContextType = {
  products: ProductType[]
  shoppingCarts: ShoppingCartType[]
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
  setShoppingCarts: React.Dispatch<React.SetStateAction<ShoppingCartType[]>>
}
