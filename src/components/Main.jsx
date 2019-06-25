import React from 'react'
import styled from 'styled-components'

// font-family: 'Karla', sans-serif;
// font-family: 'Abel', sans-serif;
// font-family: 'Cutive Mono', monospace;
// font-family: 'Raleway', sans-serif;
const MainBox = styled.div`
  background-color: rgb(43, 49, 85);
  color: white;
  box-shadow: 0px 15px 9px -5px rgba(0,0,0,0.45);

  .skills {
    background-image: linear-gradient(90deg, rgb(35, 23, 56), rgb(43, 49, 85), rgb(55, 107, 107));
    height: 38vh;
  }
  .inner {
    margin: 0 auto;
    max-width: 65em;
    padding: 4em 0 3em;
    width: calc(100% - 3em);
  }
  .inner > header {
    margin-bottom: 2em;
    display: flex;
    justify-content: center;
  }
  .skill-list {
    margin: 0 0 2em;
    font-family: 'Abel', sans-serif;   
  }
  h2 {
    font-size: 1.5em;
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
`

const ProjectBox = styled.section`
  display: flex;
  flex-direction: row;
  box-shadow: inset -10px -15px 30px 4px rgba(0,0,0,0.31);
  height: 23em;
  
  .project-img-l {
    width: 45%;
    align-self: center;
    padding: 0 0 1em 2.5em;
  }
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
`

const Main = (props)=>{
  return(
    <MainBox>
      <section className="skills">
        <div className="inner">
          <header>
            <h2>Skills</h2>
          </header>
          <p className="skill-list">HTML5 | CSS3 | Javascript | Jquery | React |  Node.js | Express | MongoDB | Mongoose | EJS | Python | Flask | Jinja | PostgreSQL | SQL | SQLite | RESTful API | BCrypt | Postman | Git | Github | Heroku | Netlify | Terminal CLI | Bootstrap | Bulma | Material UI | Materialize CSS | Semantic UI</p>
        </div>
      </section>
      <header className="project-header">
        <h2>Projects</h2>
      </header>
      <ProjectBox>
        <div className="project-img-l">
          <img src="imgs/cactusTour.png" alt="" />
        </div>
        <div className="content">
          <div className="inner-box">
            <header>
              <h3>The Cactus Tour</h3>
            </header>
              <p>I decided to recreate a web application I often used during my professional golf career, The Cactus Tour <a className="tour-link" href="http://thecactustour.com">website</a>. The Cactus Tour is a women's professional golf tour that is geared toward players striving to get their LPGA card, which is one of the largest and most competitive women's golf tour in the world. I worked with the tour director and challenged myself to implement features and functionalities he wanted to see in the redesign.</p>
            <div>
              <strong>Technologies Used:</strong>
              <p className="tech-list">HTML5 | CSS3 | JSX | React | styled-components | Node.js | Express | MongoDB | Mongoose | Git | GitHub | ChromeDevTools | Postman | Sketch</p>
            </div>
            <ul className="project-links">
              <li>
                  <a href="https://github.com/parkaitlin/Cactus-Tour" target="_blank"><button className="btn git-btn" type="submit">GitHub</button></a>
              </li>
              <li>
                  <a href="https://cactus-tour.herokuapp.com/" target="_blank"><button className="btn site-btn" type="submit">View Project</button></a>
              </li>
            </ul>
          </div>
        </div>
      </ProjectBox>
      <ProjectBox>
        <div className="content">
          <div className="inner-box">
            <header>
              <h3>WinePost</h3>
            </header>
              <p>Wine Post is a social media app for wine enthusiasts by wine enthusiasts, Ralphie, my partner for this project and myself! Users (over 21 please) can create an account to connect with fellow wine enthusiasts around the world. Users can share their reviews of and experiences with wine.</p>
            <div>
              <strong>Technologies Used:</strong>
              <p className="tech-list">HTML5 | CSS3 | JSX | React | styled-components | Python | Flask | PostgreSQL | SQLite | Mongoose | Git | GitHub | ChromeDevTools | Postman | Sketch</p>
            </div>
            <ul className="project-links">
              <li>
                  <a href="https://github.com/parkaitlin/WinePost" target="_blank"><button className="btn git-btn" type="submit">GitHub</button></a>
                </li>
                <li>
                  <a href="https://winepost.herokuapp.com/" target="_blank"><button className="btn site-btn" type="submit">View Project</button></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="project-img-r">
          <img src="imgs/winepost.png" alt="" />
        </div>
      </ProjectBox>
      <ProjectBox>
        <div className="project-img-l">
          <img src="imgs/mind8full.png" alt="" />
        </div>
        <div className="content">
          <div className="inner-box">
            <header>
              <h3>mind8full</h3>
            </header>
              <p>mind8full is an application that hopes to provide a space for personal meditation. We want our visitors to take care of their mental health in the method they see fit. As you may know meditation takes many forms, at mind8full we do it in the form of snacks: gummy bears, cough drops, and some munchies.</p>
            <div>
              <strong>Technologies Used:</strong>
              <p className="tech-list">HTML5 | CSS3 | JSX | React | styled-components | Node.js | Express | MongoDB | Mongoose | Git | GitHub | ChromeDevTools | Postman | Sketch</p>
            </div>
            <ul className="project-links">
              <li>
                  <a href="https://github.com/parkaitlin/mind8full" target="_blank"><button className="btn git-btn" type="submit">GitHub</button></a>
              </li>
              <li>
                  <a href="https://mind8full.herokuapp.com/" target="_blank"><button className="btn site-btn" type="submit">View Project</button></a>
              </li>
            </ul>
          </div>
        </div>
      </ProjectBox>
      <ProjectBox>
        <div className="content">
          <div className="inner-box">
            <header>
              <h3>Hexa-Says</h3>
            </header>
              <p>Hexa-Says is a unique version of the classic game, Simon Says. The rules to Simon Says are simple: a sequence will be played and the user will need to play the exact same sequence in order to move on. My goal with this project was to take a classic game and make it a bit more fun, challenging, but also asthetically pleasing.</p>
            <div>
              <strong>Technologies Used:</strong>
              <p className="tech-list">HTML5 | CSS3 | Node.js | Express | EJS | MongoDB | Mongoose | Git | GitHub | Heroku</p>
            </div>
            <ul className="project-links">
              <li>
                <a href="https://github.com/parkaitlin/hexa-says" target="_blank"><button className="btn git-btn" type="submit">GitHub</button></a>
              </li>
              <li>
                  <a href="https://hexa-says.herokuapp.com/" target="_blank"><button className="btn site-btn" type="submit">View Project</button></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="project-img-r">
          <img src="imgs/hexasays.png" alt="" />
        </div>
      </ProjectBox>
    </MainBox>
  )
}

export default Main