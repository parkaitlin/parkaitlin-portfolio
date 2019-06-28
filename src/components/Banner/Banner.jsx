import React from 'react'
import { BannerSection } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'




const Banner = (props)=>{
  return (
    <BannerSection>
      <div className="banner-inner">
        <header className="banner-header">
          <h1>Hi, my name is <span className="kaitlin">Kaitlin</span></h1>
        </header>
        <div className="banner-content">
          <p>I am a Software Developer with a background in the alternative investment industry and professional sports. Similar to my passion for golf, I found the same motivation and excitement within code.</p>
        </div>
        <ul className="icons">
          <li><a href="https://github.com/parkaitlin"><FontAwesomeIcon icon={faGithubSquare} className="icon" /></a></li>
          <li className="email-phone">parkaitlin@gmail.com <span>+1 (714) 406-0143</span></li>
          <li><a href="https://www.linkedin.com/in/parkaitlin/"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a></li>
        </ul>
      </div>
    </BannerSection>
  )
}

export default Banner