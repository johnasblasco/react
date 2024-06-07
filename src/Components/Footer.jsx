import React from 'react'
import styled from 'styled-components'
function Footer() {

      const h5 = {
            color: 'white',
            padding: '0',
            margin: '0'
      }
      const hr = {
            border: '1px solid darkgray'
      }
      

  return (
    <footer>
      <TitleBtn>moz://a</TitleBtn>
      <br/>

      <Links>
            <Company>
                  <h5 style={h5}>Company</h5>
                  <a href="#"><List>Mozilla Manifesto</List></a>
                  <a href="#"><List>Pres Center</List></a>
                  <a href="#"><List>Mozilla Blog</List></a>
                  <a href="#"><List>Careers </List></a>
                  <a href="#"><List>Contact</List></a>
            </Company>

            <Resources>
                  <h5 style={h5}>Resources</h5>
                  <a href="#"><List>Privacy Hub</List></a>
                  <a href="#"><List>Brand Standards</List></a>
            </Resources>

            <Support>
                  <h5 style={h5}>Support</h5>
                  <a href="#"><List>Product Help</List></a>
                  <a href="#"><List>File a Bug</List></a>
                  <a href="#"><List>Localize Mozilla</List></a>
            </Support>

            <Developers>
                  <h5 style={h5}>Developers</h5>
                  <a href="#"><List>Developer Edition</List></a>
                  <a href="#"><List>Beta</List></a>
                  <a href="#"><List>Nightly</List></a>
                  <a href="#"><List>Nightly for Android </List></a>
                  <a href="#"><List>Enterprise</List></a>
                  <a href="#"><List>Tools</List></a>
            </Developers>

            <Follow>
            <h5 style={h5}>Follow @Mozilla</h5>
                  <IconLinks>
                        <img src="https://via.placeholder.com/20" alt="" />
                        <img src="https://via.placeholder.com/20" alt="" />
                        <img src="https://via.placeholder.com/20" alt="" />
                        <img src="https://via.placeholder.com/20" alt="" />
                  </IconLinks>

            <h5 style={h5}>Follow @Firefox</h5>
                  <IconLinks>
                        <img src="https://via.placeholder.com/20" alt="" />
                        <img src="https://via.placeholder.com/20" alt="" />
                        <img src="https://via.placeholder.com/20" alt="" />
                  </IconLinks>
            </Follow>
      

      
      </Links>
      <hr style={hr}/>

    </footer>
  )
}

export default Footer

const TitleBtn = styled.button`
      margin-left: 30px;
      font-size: larger;
      font-weight: bolder;
`
const Links = styled.div`
      display: flex;
      justify-content: space-between;
      
      @media(max-width: 500px){
            display: grid;
            grid-template-columns: 40% 40%;
      }
`
const Company = styled.ul`
      display: flex;
      flex-direction: column;
`

const Resources = styled.ul`
      display: flex;
      flex-direction: column;
`
const Support = styled.ul` 
      display: flex;
      flex-direction: column;
`
const Developers = styled.ul`
      display: flex;
      flex-direction: column;
`
const Follow = styled.ul`
      display: flex;
      flex-direction: column;
`

const List = styled.li`
      color: white;
      &:hover {
            box-shadow: 0px 1px 0px white;
          }
`
const IconLinks = styled.div`
      display: flex;
      justify-content: space-around;
      
`