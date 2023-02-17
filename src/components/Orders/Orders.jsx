import React from 'react'

const Orders = ({orders}) => {
  const result = orders.map((order) => {
    return (<div>
        <h2>{order.name}</h2>
        <p>{order.id}</p>
        <p>{order.status}</p>
    </div>)
  })
    return (
    <div>
      {result}
    </div>
  )
}

export default Orders
