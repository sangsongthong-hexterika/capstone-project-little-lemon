import React from 'react';
import './Nav.css';

function Nav() {
    return (
      <nav>
        <ul>
          <li><a className='nav-item' href="#/home">Home</a></li>
          <li><a className='nav-item' href="#/about">About</a></li>
          <li><a className='nav-item' href="#/menu">Menu</a></li>
          <li><a className='nav-item' href="#/reservation">Reservation</a></li>
          <li><a className='nav-item' href="#/orderonline">OrderOnline</a></li>
          <li><a className='nav-item' href="#/login">Login</a></li>
        </ul>
      </nav>
    );
  }

  export default Nav;