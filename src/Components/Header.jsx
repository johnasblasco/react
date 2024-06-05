import React from 'react'
import styled from 'styled-components'
import logo from '../assets/avocado.png';
function Header() {
  return (
    <header>
      <img src={logo} alt="logo" id='logo'/>

      <nav>
            <ul>
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
            </ul>
      </nav>
      
      <div className="menu">
            <img src="#" alt="H" />
            <img src="#" alt="H" />
      </div>


    </header>

  )
}

export default Header


