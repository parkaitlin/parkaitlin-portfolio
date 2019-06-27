import React from 'react'
import { FootFooter, InnerFooter } from './style'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Footer = (props)=>{
  return(
    <FootFooter>
      <InnerFooter>
        <ul className="icons">
          <li><a href="https://github.com/parkaitlin" target="_blank"><FontAwesomeIcon icon={faGithubSquare} className="icon" /></a></li>
          <li><a href="https://www.linkedin.com/in/parkaitlin/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a></li>
        </ul>
        <ul className="copyright">
          <li>&copy; Kaitlin Park</li>
          <li className="email">Email: <span>parkaitlin@gmail.com</span></li>
          <li className="cell">Phone: <span>+1(714) 406-0143</span></li>
        </ul>
      </InnerFooter>
    </FootFooter>
  )
}


export default Footer
