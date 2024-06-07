import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../assets/avocado.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {

      const [status, setStatus] = useState(0);
      
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
            <ProfileIcon />
            <HamburgerMenu onClick={()=>setStatus(true)}/>
      </div>

      <HamburgerNav show = {status}>
            <CustomX onClick={()=>setStatus(false)}/>
            <li><a href="">Home</a></li>
            <li><a href="">Education</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Tools</a></li>
            <li><a href="">About</a></li>
      </HamburgerNav>

    </header>

  )
}

export default Header

const HamburgerNav = styled.ul`
      padding: 20px;
      margin: 0;
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 96vw;
      background-color: white;
      z-index: 10;
      box-shadow: -10px 0 20px -10px gray;
      transition: 0.7s;
      transform: ${props=>props.show ? 'translateX(0)' : 'translateX(100%)' };
      li{   
            font-weight: 700;
            
            margin: 15px 0;

            a{    color: gray;
                  text-decoration: none;
            }
      }
`
const CustomX = styled(CloseIcon)`
      cursor: pointer;

`

const ProfileIcon = styled(AccountCircleIcon)`
      cursor: pointer;
`
const HamburgerMenu = styled(MenuIcon)`
      cursor: pointer;
`