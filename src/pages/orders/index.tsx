import { useContext } from 'react'
import { ShopContext } from '../../context'
import Layout from '../../components/layout'
import OrdersCard from '../../components/orders-card'

function Orders() {
  const { orders } = useContext(ShopContext)

  return (
    <Layout>
      <p>Tus Ordenes</p>
      {
        orders.map((order) => (
          <OrdersCard
            key={order.id}
            id={order.id}
            date={order.date}
            totalPrice={order.totalPrice}
            totalProducts={order.totalItems}
          />
        ))
      }
    </Layout>
  )
}

export default Orders
