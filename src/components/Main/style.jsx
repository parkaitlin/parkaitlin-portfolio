import styled from 'styled-components'

export const MainBox = styled.div`
  background-color: rgb(43, 49, 85);
  color: white;
  box-shadow: 0px 15px 9px -5px rgba(0,0,0,0.45);

  .skills {
    background-image: linear-gradient(90deg, rgb(35, 23, 56), rgb(43, 49, 85), rgb(55, 107, 107));
    height: 16em;
  }
  .inner {
    margin: 0 auto;
    max-width: 65em;
    padding: 2em 0 4em;
    width: calc(100% - 3em);
  }
  .inner > header {
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
  }
  .skill-list {
    margin: 0 0 2em;
    font-family: 'Abel', sans-serif;   
    font-size: 1.2em;
    letter-spacing: .09em;
    text-align: center;
  }
  h2 {
    font-size: 1.7em;
    letter-spacing: .15em;
    font-family: 'Raleway', sans-serif;
  }
  .inner > header > h2::after {
    background-color: #fff;
    content: "";
    display: block;
    height: 2px;
    margin: .325em 0 .5em;
    width: 100%;
  }
  .project-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8em;
  }
  .project-header > h2::after {
    background-color: #fff;
    content: "";
    display: block;
    height: 2px;
    margin: .325em 0 .5em;
    width: 100%;
  }
  .arrow-box {
    display: flex;
    justify-content: center;
  }
  .arrow {
      color: white;
      font-size: 30px;
      animation: fadeInDown 2s;
      animation-iteration-count: infinite;
    }
    @keyframes fadeInDown {
      0%, 100% {
          opacity: 0.5;
          -webkit-transform: translate3d(0, -70%, 0);
          transform: translate3d(0, -75%, 0);
      }
      50% {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
      }
    }
  @media only screen and (min-width: 600px) and (max-width: 969px){
    h2 {
      font-size: 1.6em;
    }
    .skill-list {
    font-size: 1em;
    }
  }
  @media (max-width: 599px) {
    h2 {
      font-size: 1.4em;
    }
    .skill-list {
      font-size: .9em;
      letter-spacing: .06em;
      text-align: justify;
    }
  }

`
export const FirstProject = styled.section`
  display: flex;
  flex-direction: column;
  box-shadow: inset -10px -15px 30px 4px rgba(0,0,0,0.31);
  height: 30em;
  .first-project {
    display: flex;
    flex-direction: row;
    padding-bottom: 4em;
  }
  .project-img-l {
    align-self: center;
    height: auto;
    width: 45%;
    padding: 1.5em 0 0 2.5em;
  }
  img{
    width: 100%;
    align-self: center;
  }
  .content {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 3em;
  }
  .inner-box {
    margin: 0 auto;
    max-width: 100%;
    width: 65em;
  }
  header {
    margin-bottom: 0.8em;
    display: flex;
    font-family: 'Raleway', sans-serif;
    letter-spacing: .1em;
  }
  p {
    letter-spacing: 0.08em;
    font-family: 'Abel', sans-serif;
    font-size: 0.95em;
  }
  h3::after {
    background-color: #fff;
    content: "";
    display: block;
    height: 2px;
    margin: .325em 0 .5em;
    width: 100%;
  }
  .inner-box > p {
    margin: 0 0 1em;
  }
  .tech-list {
    margin: .3em 0 1em;
  }
  .tour-link {
    color: white;
  }
  .tour-link:hover {
    color: #00ffaa;
  }
  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
  }
  li {
    display: inline-block;
    padding: 0 1em 0 0;
    vertical-align: middle;
  }
   button{
    border-radius: 0;
    font-size: .8em;
    font-weight: 600;
    height: 3.5em;
    letter-spacing: .25em;
    padding: 0 1.75em;
    text-align: center;
  }
  .git-btn:hover {
    color: #00ffaa;
    box-shadow: inset 0 0 0 2px #00ffaa;    
  }
  .site-btn:hover {
    color: #00ffaa;
    border: 2px solid #00ffaa;
  }
  .git-btn {
    box-shadow: inset 0 0 0 2px #fff;
    background-color: transparent;
    border: 0;
    color: #fff;
  }
  .site-btn {
    background-color: #fff;
    color: rgb(43, 49, 85);
    border: 2px solid #fff;
  }
  div > strong {
    font-family: 'Raleway', sans-serif;
    letter-spacing: .08em;
  }
  .project-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8em;
  }
  .project-header > h2::after {
    background-color: #fff;
    content: "";
    display: block;
    height: 2px;
    margin: .325em 0 .5em;
    width: 100%;
  }
  @media only screen and (min-width: 963px) and (max-width: 1098px){
    .first-project {
      padding-bottom: 3em;
    }
    .project-header > h2 {
      font-size: 1.5em;
    }
  }
  @media only screen and (min-width: 802px) and (max-width: 962px){
    height: 35em;
    .project-header {
      height: 7em;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 801px){
    height: 46em;
    .first-project {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .project-img-l {
      padding: 1.5em 0;
      width: 65%
    }
    .project-header {
      padding: 0;
      margin: 1.5em 0 0 0;
    }
    .content {
      width: calc(100% - 3em);
    }
  }
  @media (max-width: 479px){
    height: 50em;
    .first-project {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .project-img-l {
      padding: 1em 0;
      width: 70%
    }
    .project-header {
      padding: 0;
      margin: 1.5em 0 0 0;
      height: 6em;
    }
    .content {
      width: calc(100% - 1em);
    }
  }
`
export const ProjectBox = styled.section`
  display: flex;
  flex-direction: row;
  box-shadow: inset -10px -15px 30px 4px rgba(0,0,0,0.31);
  height: 25em;
  
  .project-img-r {
    width: 45%;
    align-self: center;
    padding: 0 2.5em 1em 0;
  }
  img{
    width: 100%;
  }
  .content {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.2em 3em 1em;
  }
  .inner-box {
    margin: 0 auto;
    max-width: 100%;
    width: 65em;
  }
  header {
    margin-bottom: 0.8em;
    display: flex;
    font-family: 'Raleway', sans-serif;
    letter-spacing: .1em;
  }
  p {
    letter-spacing: 0.08em;
    font-family: 'Abel', sans-serif;
    font-size: 0.95em;
  }
  h3::after {
    background-color: #fff;
    content: "";
    display: block;
    height: 2px;
    margin: .325em 0 .5em;
    width: 100%;
  }
  .inner-box > p {
    margin: 0 0 1em;
  }
  .tech-list {
    margin: .3em 0 1em;
  }
  .tour-link {
    color: white;
  }
  .tour-link:hover {
    color: #00ffaa;
  }
  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
  }
  li {
    display: inline-block;
    padding: 0 1em 0 0;
    vertical-align: middle;
  }
   button{
    border-radius: 0;
    font-size: .8em;
    font-weight: 600;
    height: 3.5em;
    letter-spacing: .25em;
    padding: 0 1.75em;
    text-align: center;
  }
  .git-btn:hover {
    color: #00ffaa;
    box-shadow: inset 0 0 0 2px #00ffaa;    
  }
  .site-btn:hover {
    color: #00ffaa;
    border: 2px solid #00ffaa;
  }
  .git-btn {
    box-shadow: inset 0 0 0 2px #fff;
    background-color: transparent;
    border: 0;
    color: #fff;
  }
  .site-btn {
    background-color: #fff;
    color: rgb(43, 49, 85);
    border: 2px solid #fff;
  }
  div > strong {
    font-family: 'Raleway', sans-serif;
    letter-spacing: .08em;
  }

  @media only screen and (min-width: 480px) and (max-width: 801px) {
    height: 40em;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    .project-img-r {
      width: 65%;
      padding: 1.5em 0;
    }
    .content {
      width: calc(100% - 3em);
    }
  }
  @media (max-width: 479px) {
    height: 42em;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    .project-img-r {
      width: 70%;
      padding: 1em 0;
    }
    .content {
      width: calc(100% - 1em);
    }
  }
`
export const ProjectBoxTwo = styled.section`
  display: flex;
  flex-direction: row;
  box-shadow: inset -10px -15px 30px 4px rgba(0,0,0,0.31);
  height: 25em;
  
  .project-img-l {
    width: 45%;
    align-self: center;
    padding: 0 0 1em 2.5em;
  }
  img{
    width: 100%;
  }
  .content {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.2em 3em 1em;
  }
  .inner-box {
    margin: 0 auto;
    max-width: 100%;
    width: 65em;
  }
  header {
    margin-bottom: 0.8em;
    display: flex;
    font-family: 'Raleway', sans-serif;
    letter-spacing: .1em;
  }
  p {
    letter-spacing: 0.08em;
    font-family: 'Abel', sans-serif;
    font-size: 0.95em;
  }
  h3::after {
    background-color: #fff;
    content: "";
    display: block;
    height: 2px;
    margin: .325em 0 .5em;
    width: 100%;
  }
  .inner-box > p {
    margin: 0 0 1em;
  }
  .tech-list {
    margin: .3em 0 1em;
  }
  .tour-link {
    color: white;
  }
  .tour-link:hover {
    color: #00ffaa;
  }
  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
  }
  li {
    display: inline-block;
    padding: 0 1em 0 0;
    vertical-align: middle;
  }
   button{
    border-radius: 0;
    font-size: .8em;
    font-weight: 600;
    height: 3.5em;
    letter-spacing: .25em;
    padding: 0 1.75em;
    text-align: center;
  }
  .git-btn:hover {
    color: #00ffaa;
    box-shadow: inset 0 0 0 2px #00ffaa;    
  }
  .site-btn:hover {
    color: #00ffaa;
    border: 2px solid #00ffaa;
  }
  .git-btn {
    box-shadow: inset 0 0 0 2px #fff;
    background-color: transparent;
    border: 0;
    color: #fff;
  }
  .site-btn {
    background-color: #fff;
    color: rgb(43, 49, 85);
    border: 2px solid #fff;
  }
  div > strong {
    font-family: 'Raleway', sans-serif;
    letter-spacing: .08em;
  }

  @media only screen and (min-width: 480px) and (max-width: 801px) {
    height: 40em;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .project-img-l {
      padding: 1.5em 0;
      width: 65%
    }
    .content {
      width: calc(100% - 3em);
    }
  }
  @media (max-width: 479px) {
    height: 42em;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .project-img-l {
      padding: 1em 0;
      width: 70%
    }
    .content {
      width: calc(100% - 1em);
    }
  }
`