import React from 'react';
import './Footer.css';

function Footer() {
    return (
      <footer>
        <image>
          <img src="/Logo.svg" alt="Logo" />
        </image>
        <section id='doormat-nav'>
          <strong>Doormat Navigation</strong>
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/about">About</a></li>
            <li><a href="#/menu">Menu</a></li>
            <li><a href="#/reservation">Reservation</a></li>
            <li><a href="#/orderonline">Order Online</a></li>
            <li><a href="#/login">Login</a></li>
          </ul>
        </section>
        <section id='footer-contact'>
          <strong>Contact</strong>
          <address>
            <p><a href="#/contact">123 Main St. Longmont, Colorado 80501</a></p>
            <p><a href="tel:+1(303)9883548">+1(303)9883548"</a></p>
            <p><a href="mailto:contact@example.com">contact@example.com</a></p>
          </address>
        </section>
        <section id='footer-social'>
          <strong>Social Media Link</strong>
          <ul>
            <li><a href="#/facebook">Facebook</a></li>
            <li><a href="#/instagram">Instagram</a></li>
          </ul>
        </section>
      </footer>
    );
  }

  export default Footer;