import React from 'react';
import { useEffect } from 'react';

const Catalog = ({ data, user, cart, setCart }) => {
  useEffect(() => {
    document.title = user.name;
  });
  console.log(data);
  const addToCart = (id) => {
    data.map((pet) => {
      if (id === pet.id) {
        setCart([...cart, { id: pet.id, name: pet.name, status: pet.status }]);
      }
    });
  };
  console.log(data)
  const result = data.map((pet) => {
    return (
      <div key={pet.name}>
        <h2>{pet.name}</h2>
        <p>{pet.status}</p>
        <p>{pet.id}</p>
        <button
          onClick={() => {
            addToCart(pet.id);
          }}>
          Add to cart
        </button>
      </div>
    );
  });
  
  return <div>{result}</div>;
};

export default Catalog;
