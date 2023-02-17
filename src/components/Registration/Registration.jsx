import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

const Registration = ({ users, setUsers }) => {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const id = () => {
    return uuid();
  };
  const registration = () => {
    setUsers([...users, { id: id(), login: login, name: name, password: password }]);
    navigate('/authorization');
  };
  return (
    <div>
      <h2>Регистрация</h2>
      <input
        type="text"
        placeholder="Login"
        onChange={(e) => {
          setLogin(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          registration();
        }}>
        Регистрация
      </button>
    </div>
  );
};

export default Registration;
