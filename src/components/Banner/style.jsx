import styled from 'styled-components'

export const BannerSection = styled.section`
  background-color: rgb(43, 49, 85);
  background-image: url("imgs/golfpic.jpg");
  background-position: right;
  background-size: 50%;
  background-repeat: no-repeat;
  animation: focusIn 1.6s ease;
  color: white;
  display: flex;
  align-items: center;
  height: 29em;
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
    margin-bottom: 1.5em;
  }
  .banner-content {
    margin: 0 0 2em;
    width: 46%;
  }
  .banner-content > p {
    font-family: 'Abel', sans-serif;
    letter-spacing: .1em;
    font-size: 1.2em;
    animation: fadeFromRight 2.8s ease;
  }
  h1 {
    font-size: 3.25em;
    font-family: 'Raleway', sans-serif;
    letter-spacing: .22em;
    animation: fadeFromLeft 3s ease;
  }
  h1::after {
    background-color: #fff;
    content: "";
    display: block;
    height: 2px;
    margin: .2em 0 .2em;
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
    font-size: 3em;
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

  @media only screen and (min-width: 1136px) and (max-width: 1190px){
    h1 {
    font-size: 3.25em;
    letter-spacing: .21em
    }
    .banner-content {
      width: 46%;
    }
    .banner-inner {
      width: calc(100% - 6em);
    }
  }
  @media only screen and (min-width: 1100px) and (max-width: 1135px){
    h1 {
      font-size: 3em;
      letter-spacing: .2em
    } 
    .banner-content {
      width: 48%;
    }
    .banner-inner {
      width: calc(100% - 11em);
    }
    .banner-content > p {
      font-size: 1.1em;
    }
  }
  @media only screen and (min-width: 1030px) and (max-width: 1099px){
    h1 {
      font-size: 2.8em;
      letter-spacing: .2em
    } 
    .banner-content {
      width: 48%;
    }
    .banner-inner {
      width: calc(100% - 11em);
    }
    .banner-content > p {
      font-size: 1.1em;
    }
  }
  @media only screen and (min-width: 970px) and (max-width: 1029px){
    h1 {
    font-size: 2.8em;
    letter-spacing: .19em;
    }
    .banner-content {
      width: 48%;
    }
    .banner-inner {
      width: calc(100% - 8em);
    }
    .banner-content > p {
      font-size: 1em;
    }
  }
  @media only screen and (min-width: 408px) and (max-width: 969px) {
    /* height: 32em; */
    background-image: none;
    padding: 0 0 0;
    h1 {
    font-size: 2.7em;
    letter-spacing: .2em;
    }
    .banner-content {
      width: auto;
    }
    ul {
      width: auto;
    }
    .icon {
      font-size: 2.5em;
    }
    .banner-content > p {
      letter-spacing: .065em;
      font-size: 1.2em;
    }
    .kaitlin {
      color: #00ffaa;
    } 
  }
  @media (max-width: 407px){
    height: 28em;
    background-image: none;
    padding: 0 0 0;
    h1 {
    font-size: 2.2em;
    letter-spacing: .15em;
    }
    .banner-content {
      width: auto;
    }
    ul {
      width: auto;
    }
    .icon {
      font-size: 2em;
    }
    .banner-content > p {
      letter-spacing: .05em;
      font-size: 1em;
    }
    .kaitlin {
      color: #00ffaa;
    } 
    .email-phone > span {
      color: #00ffaa;
    }
  } 

  @keyframes fadeFromLeft {
    from { 
      opacity: 0;
      transform: translateX(-10em);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeFromRight {
    from { 
      opacity: 0;
      transform: translateX(10em);
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
  @keyframes focusIn {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  }
`