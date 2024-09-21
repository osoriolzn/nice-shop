import { useContext } from 'react'
import { ShopContext } from '../../context'

type CardProps = {
  data: {
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
}

function Card({ data }: CardProps) {
  const { shoppingCarts, setShoppingCarts } = useContext(ShopContext)

  const handleClickAddToCart = (event:React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setShoppingCarts([...shoppingCarts, data])
  }

  const renderIcon = (id: number) => {
    const isInCart = shoppingCarts.filter(item => item.id === id).length > 0
    
    if(isInCart) {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2'
        >
          <svg width="24" height="24" viewBox="0 0 24 24"
            fill="currentColor" className="absolute top-0 right-0 text-white bg-green-400 rounded-full">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
          </svg>
        </button>
      )
    } else {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2'
          onClick={(event) => handleClickAddToCart(event)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="absolute top-0 right-0 text-blue-500 bg-gray-100 rounded-full">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
        </button>
      )
    }
  }

  return (
    <div className='bg-white cursor-pointer w-80 h-[480px] border rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.category}
        </span>
        <img className='w-full h-full object-cover rounded-lg p-2' src={data.image} alt={data.description} />
        {renderIcon(data.id)}
      </figure>

      <p className='flex justify-between items-center p-2'>
        <span className='text-sm font-light'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  )
}

export default Card
