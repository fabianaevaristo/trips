import React from 'react';
import { useSelector } from 'react-redux' //conctar o header com o redux
import { Link } from 'react-router-dom';
import logo from '../../assests/logo.svg';
import './style.css';

export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length);
 return ( 
   <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo do Projeto" />
      </Link>

      <Link className="reserva" to="/reservas">
        <div>
          <strong> Minhas reservas </strong>
          <span> {reserveSize}  reservas </span>
        </div>
      </Link>
   </header>
 );
}