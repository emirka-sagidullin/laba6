import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({isAuthorized}) => {
  return <div>{isAuthorized?
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/catalog">Каталог</Link>
        </li>
        <li>
          <Link to="/cart">Корзина</Link>
        </li>
        <li>
          <Link to="/orders">Заказы</Link>
        </li>
        <li>
          <Link to="/exit">Выход</Link>
        </li>
      </ul>
    </nav>
  </header>
:
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/authorization">Войти</Link>
        </li>
        <li>
          <Link to="/registration">Регистрация</Link>
        </li>
      </ul>
    </nav>
  </header>}
  </div>;
};

export default Header;
