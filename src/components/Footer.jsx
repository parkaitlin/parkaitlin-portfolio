import React from 'react'
import styled from 'styled-components'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FootFooter = styled.footer`
  background-color: rgb(43, 49, 85);
  border-top: 2px solid white;
`

const InnerFooter = styled.div`
  background-color: rgb(43, 49, 85);
  margin: 0 auto;
  max-width: 65em;
  padding: 4em 0 3em;
  width: calc(100% - 3em);

  li {
    list-style: none;
  }
  ul {
    display: flex;
    
  }
  .icon {
    font-size: 5vh;
    color: white;
    margin: 0 0.75em 1em 0;
  }
  .design {
    margin-left: 1em;
    padding-left: 1em;
    border-left: 1px solid #a7adba;
  }
  .copyright {
    color: #a7adba;
  }
`


const Footer = (props)=>{
  return(
    <FootFooter>
      <InnerFooter>
        <ul className="icons">
          <li><a href="https://github.com/parkaitlin"><FontAwesomeIcon icon={faGithubSquare} className="icon" /></a></li>
          <li><a href="https://www.linkedin.com/in/parkaitlin/"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faInstagram} className="icon" /></a></li>
        </ul>
        <ul className="copyright">
          <li>&copy; Kaitlin Park</li><li className="design">Design: <span>parkaitlin</span></li>
        </ul>
      </InnerFooter>
    </FootFooter>
  )
}


export default Footer
