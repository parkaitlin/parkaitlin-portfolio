import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'


const HeaderTop = styled.header`
  color: white;
  background-color: transparent;
  box-shadow: none;
  position: absolute;
  /* transition: opacity 2.5s ease;
  transition-delay: .75s; */
  
  display: flex;
  height: 3.25em;
  left: 0;
  letter-spacing: .25em;
  line-height: 3.25em;
  margin: 0;
  top: 0;
  width: 100%;
  animation: fadeIn 7s;
  
  p {
    font-size: 1em;
    font-family: 'Abel', sans-serif;
    padding: 0 1.5em;
  }

  p:hover {
    strong {
      background-color: #00ffaa;
    }
    span {
      color: #00ffaa;
    }
  }
  strong {
    background-color: #fff;
    color: rgb(43, 49, 85);
    display: inline-block;
    line-height: 1.5em;
    margin-right: .5em;
    padding: 0 .325em;
  }
  nav {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    font-family: 'Abel', sans-serif;
  }
  a {
    font-size: 1.25em;
    padding: 0 1em;
    color: rgb(43, 49, 85);
    text-decoration: none;
  }
  @keyframes fadeIn {
    from { 
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Header = (props)=>{
  return(
    <HeaderTop>
        <p>
          <strong>Kaitlin</strong>
          <span>Park</span>
        </p>
        <nav>
          <a className="menu" href="javascript:;">Menu <FontAwesomeIcon icon={faDiceD20} className="icon" /></a>
        </nav>
    </HeaderTop>
  )
}

export default Header