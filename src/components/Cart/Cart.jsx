import React from 'react'

const Cart = ({cart, count, setCount, setCart, orders, setOrders}) => {
    console.log(cart)
  const result = cart.map((pet) => {
    return (<div key={pet.name}>
        <h2>Название: {pet.name}</h2>
        <p>Статус: {pet.status}</p>
        <p>Айди: {pet.id}</p>
        <p>Количество: {count}</p>
        <button>Заказать</button>
    </div>)
  })
  
    return (
    <div>
      {result}
    </div>
  )
}

export default Cart
