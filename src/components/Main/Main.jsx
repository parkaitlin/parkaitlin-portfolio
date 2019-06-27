import React from 'react'
import { MainBox, FirstProject, ProjectBox, ProjectBoxTwo } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Main = (props)=>{
  return(
    <MainBox>
      <section className="skills">
        <div className="inner">
          <header>
            <h2>Skills</h2>
          </header>
          <p className="skill-list">HTML5 | CSS3 | Javascript | Jquery | React |  Node.js | Express | MongoDB | Mongoose | EJS | Python | Flask | Jinja | PostgreSQL | SQL | SQLite | RESTful API | BCrypt | Postman | Git | Github | Heroku | Netlify | GatsbyJS | Terminal CLI | Bootstrap | Bulma | Material UI | Materialize CSS | Semantic UI </p>
          <div className="arrow-box"><FontAwesomeIcon icon={faChevronDown} className="arrow" /></div>
        </div>
      </section>
      <FirstProject>
        <header className="project-header">
          <h2>Projects</h2>
        </header>
        <div className="first-project">
          <div className="project-img-l">
            <img src="imgs/cactusTour.png" alt="" />
          </div>
          <div className="content">
            <div className="inner-box">
              <header>
                <h3>The Cactus Tour</h3>
              </header>
                <p>I decided to recreate a web application I used during my golf career, The Cactus Tour <a className="tour-link" href="http://thecactustour.com">website</a>. The Cactus Tour is a women's professional golf tour that is geared toward players striving to get their LPGA card, which is one of the largest and most competitive women's golf tour in the world. I worked with the tour director and challenged myself to implement features and functionalities he wanted to see in the redesign.</p>
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
        </div>
      </FirstProject>
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
      <ProjectBoxTwo>
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
      </ProjectBoxTwo>
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