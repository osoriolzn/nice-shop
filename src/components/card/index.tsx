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
  return (
    <div className='bg-white cursor-pointer w-80 h-[480px] border rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.category}
        </span>
        <img className='w-full h-full object-cover rounded-lg p-2' src={data.image} alt={data.title} />
      </figure>

      <p className='flex justify-between items-center p-2'>
        <span className='text-sm font-light'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  )
}

export default Card
