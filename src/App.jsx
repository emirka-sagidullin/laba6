import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Authorization from './components/Authorization/Authorization';
import Registration from './components/Registration/Registration';
import Header from './components/Header/Header';
import Exit from './components/Exit/Exit';
import Catalog from './components/Catalog/Catalog';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';

function App() {
  const initUsers = [
    {
      id: '1',
      login: 'user1@mail.com',
      name: 'user1',
      password: 'Password1',
    },
    {
      id: '2',
      login: 'user2@mail.com',
      name: 'user2',
      password: 'Password2',
    },
  ];
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [users, setUsers] = useState(initUsers);
  const [user, setUser] = useState({});
  const [data, setData] = useState();
  const [pets, setPets] = useState();
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([])
  const [count, setCount] = useState(1)


  async function fetchPets() {
    setTimeout(async () => {
      const data_fetch = await fetch(
        'https://petstore.swagger.io/v2/pet/findByStatus?status=sold',
      );
      const newData = await data_fetch.json();
      setData(newData);
    }, 1000);
  }
  useEffect(() => {
    fetchPets();
  }, []);
  console.log(data)
  return (
    <Router>
      <Header isAuthorized={isAuthorized} />
      <Routes>
        <Route
          path="/authorization"
          element={
            <Authorization
              users={users}
              setUser={setUser}
              isAuthorized={isAuthorized}
              setIsAuthorized={setIsAuthorized}
            />
          }
        />
        <Route path="/registration" element={<Registration setUsers={setUsers} users={users} />} />
        <Route
          path="/catalog"
          element={<Catalog count={count} setCount={setCount} user={user} cart={cart} setCart={setCart} data={data} isAuthorized={isAuthorized} />}
        />
        <Route
          path="/exit"
          element={<Exit setUser={setUser} setIsAuthorized={setIsAuthorized} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} count={count} setCart={setCart} orders={orders} setOrders={setOrders} />}
        />
        <Route
          path="/orders"
          element={<Orders setOrders={setOrders} orders={orders} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
