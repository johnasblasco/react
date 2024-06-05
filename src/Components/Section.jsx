import React from 'react'
import styled from 'styled-components'
function Section({img,name,description}) {
  return (
    <Card>
      <img src={props => `url("../assets/${props.img}")`}  alt = 'asdasd'/>
      <h2>{name}</h2>
      <p>{description}</p>
    </Card>
  )
}

export default Section

const Card = styled.div`
      margin: 20px;
      display: inline-block;
      text-align: center;
      width: 250px;
      border: 1px solid gray;
      padding: 20px 20px;
      box-shadow: 5px 5px 5px gray;
      height: 100px;
      
`
