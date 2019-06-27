import React from 'react'
import { HeaderTop } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'


const Header = (props)=>{
  return(
    <HeaderTop>
        <p>
          <strong>Kaitlin</strong>
          <span>Park</span>
        </p>
        <nav>
          {/* <a className="menu" href="javascript:;">Menu <FontAwesomeIcon icon={faDiceD20} className="icon" /></a> */}
        </nav>
    </HeaderTop>
  )
}

export default Header