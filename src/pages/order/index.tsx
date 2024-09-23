import { useParams } from 'react-router-dom'
import Layout from '../../components/layout'
import OrderCard from '../../components/order-card'
import { OrderType } from '../../types/types'

function Order() {
  const params = useParams()
  const orderId = params.id
  const getOrdersJson = localStorage.getItem('orders')
  const getOrders: OrderType[] = getOrdersJson ? JSON.parse(getOrdersJson) : []
  
  const order = getOrders.find(order => order.id === orderId)
  const orderItems = order?.items || []
  
  return (
    <Layout>
      <p>Tu Orden</p>
      <div className='w-[520px] py-2 px-2'>
        {orderItems.map(item => (
          <OrderCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.image}
            price={item.price}
          />
        ))
        }
      </div>
    </Layout>
  )
}

export default Order
