type OrderCardProps = {
  id: number
  title: string
  price: number
  imageUrl: string
  handleDelete: (id: number) => void
}

function OrderCard({ id, title, price, imageUrl, handleDelete }: OrderCardProps) {
  let renderIcon

  if (handleDelete) {
    renderIcon = <button onClick={() => handleDelete(id)}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="cursor-pointer text-blue-500 mr-1">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M10 10l4 4m0 -4l-4 4" />
        </svg>
    </button>
  }

  return (
    <div className='flex justify-between items-center border rounded-lg pb-2 my-1'>
      <div className='flex items-center gap-2'>
        <figure className='min-w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover p-1' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        {renderIcon}
      </div>
    </div>
  )
}

export default OrderCard
