import React from 'react';
import "./Header.css";

import icons from "../assets/icons/iconos.png";

const Header = (props) => {
  return (
    <div className='Header' style={{backgroundColor:props.color}}>
        <h1>Soy un título</h1>
        <h2>Soy un subtítulo</h2>
        <h2>{props.title}</h2>
        <img className='icon' src={icons} alt='social-icons'/>
    </div>
  )
}

export default Header