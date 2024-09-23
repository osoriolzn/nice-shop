import { Link } from 'react-router-dom'

type OrdersCardProps = {
  id: `${string}-${string}-${string}-${string}-${string}`
  date: string
  totalPrice: number
  totalProducts: number
}

function OrdersCard({id, date, totalPrice, totalProducts }: OrdersCardProps) {
  const renderText = totalProducts > 1 ? 'Productos' : 'Producto'
  // const handleDeleteProduct = () => {
  //   console.log(id)
  // }
  
  return (
    <div className='flex justify-between items-center'>
      <div className='flex justify-between items-center border border-black m-1 w-[520px] rounded-lg'>
        <p className='flex justify-between items-center gap-2 p-2 w-full'>
          <span className='flex'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="text-blue-500">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
              <path d="M16 3v4" />
              <path d="M8 3v4" />
              <path d="M4 11h16" />
              <path d="M7 14h.013" />
              <path d="M10.01 14h.005" />
              <path d="M13.01 14h.005" />
              <path d="M16.015 14h.005" />
              <path d="M13.015 17h.005" />
              <path d="M7.01 17h.005" />
              <path d="M10.01 17h.005" />
            </svg>
            {date}
          </span>

          <span className='flex'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="text-blue-500">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
              <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
            </svg>
            {totalProducts} {renderText}
          </span>

          <span className='flex'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="text-blue-500">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
              <path d="M12 7v10" />
            </svg>
            {totalPrice}
          </span>
        </p>
      </div>

      <Link to={`/order/${id}`} className='border border-black rounded-lg mr-1'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="m-2">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20 12l-10 0" />
          <path d="M20 12l-4 4" />
          <path d="M20 12l-4 -4" />
          <path d="M4 4l0 16" />
        </svg>
      </Link>

      <button
        className='border border-black rounded-lg'
        // onClick={handleDeleteProduct}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="text-red-500 m-2">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 7l16 0" />
          <path d="M10 11l0 6" />
          <path d="M14 11l0 6" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </button>
    </div>
  )
}

export default OrdersCard
