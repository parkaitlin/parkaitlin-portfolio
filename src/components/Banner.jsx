import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'


const BannerSection = styled.section`
  background-color: rgb(43, 49, 85);
  background-image: url("imgs/golfpic.jpg");
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  /* animation: fadeIn 2s */
  /* background-image: linear-gradient(90deg, rgb(35, 23, 56), rgb(43, 49, 85), rgb(55, 107, 107)); */
  color: white;
  display: flex;
  align-items: center;
  height: 62vh;
  max-height: 32em;
  min-height: 22em;
  padding: 6em 0 2em;

  .banner-inner {
    margin: 0 auto;
    max-width: 65em;
    padding: 2em 0 0;
    width: calc(100% - 3em);
  }
  .banner-header {
    margin-bottom: 2em;
  }
  .banner-content {
    margin: 0 0 3em;
    width: 45%;
  }
  .banner-content > p {
    font-family: 'Abel', sans-serif;
    letter-spacing: .1em;
    font-size: 1.2em;
    animation: fadeFromRight 2s
  }
  h1 {
    font-size: 3.25em;
    font-family: 'Raleway', sans-serif;
    letter-spacing: .17em;
    animation: fadeFromLeft 2s
  }
  h1::after {
    background-color: #fff;
    content: "";
    display: block;
    height: 2px;
    margin: .325em 0 .5em;
    width: 100%
  }
  li {
    list-style: none;
  }
  ul {
    display: flex;
    width: 45%;
    justify-content: center;    
  }
  .icon {
    font-size: 5vh;
    color: white;
    margin: 0 .75em 0 .75em;
  }
  .icon:hover {
    color: #00ffaa;
  }
  .email-phone {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Abel', sans-serif;
    letter-spacing: .1em;
    font-size: 1em;
    animation: fadeIn 7s
  }
  @keyframes fadeFromLeft {
    from { 
      opacity: 0;
      transform: translateX(-4em);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeFromRight {
    from { 
      opacity: 0;
      transform: translateX(4em);
    }
    to {
      opacity: 1;
      transform: none;
    }
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

const Banner = (props)=>{
  return (
    <BannerSection>
      <div className="banner-inner">
        <header className="banner-header">
          <h1>Hi, my name is Kaitlin</h1>
        </header>
        <div className="banner-content">
          <p>I am Software Developer with experience in the alternative investment industry and professional sports. Similar to my passion for golf, I found the same motivation and excitement within code.</p>
        </div>
        <ul className="icons">
          <li><a href="https://github.com/parkaitlin"><FontAwesomeIcon icon={faGithubSquare} className="icon" /></a></li>
          <li className="email-phone">parkaitlin@gmail.com <span>+1(714) 406-0143</span></li>
          {/* <li><a href="#"><FontAwesomeIcon icon={faFileAlt} className="icon" /></a></li> */}
          <li><a href="https://www.linkedin.com/in/parkaitlin/"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a></li>
        </ul>
      </div>
    </BannerSection>
  )
}

export default Banner