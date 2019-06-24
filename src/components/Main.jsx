import React from 'react'
import styled from 'styled-components'

const MainBox = styled.div`
  background-color: rgb(43, 49, 85);
  color: white;

  .skills {
    background-image: linear-gradient(90deg, rgb(35, 23, 56), rgb(43, 49, 85), rgb(55, 107, 107));
  }
  .inner {
    margin: 0 auto;
    max-width: 65em;
    padding: 4em 0 3em;
    width: calc(100% - 3em);
  }
  .header {
    margin-bottom: 2em;
  }
  .skill-list {
    margin: 0 0 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h2::after {
    background-color: #fff;
    content: "";
    display: block;
    height: 2px;
    margin: .325em 0 .5em;
    width: 3em;
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
      <section className="projects">
        <img src="" alt="" />
        <div className="content">
          <header>
            <h3>(Project name)</h3>
          </header>
            <p>(short project description)</p>
          <div>
            <strong>Technologies Used:</strong>
            <p>(Tech)</p>
          </div>
          <ul className="project-links">
            <li>
              <form action="" target="_blank">
                <input type="submit" value="GitHub"/>
              </form>
            </li>
            <li>
              <form action="" target="_blank">
                <input type="submit" value="View Project"/>
              </form>
            </li>
          </ul>
        </div>
      </section>
      <section className="projects">
        <img src="" alt="" />
        <div className="content">
          <header>
            <h3>(Project name)</h3>
          </header>
            <p>(short project description)</p>
          <div>
            <strong>Technologies Used:</strong>
            <p>(Tech)</p>
          </div>
          <ul className="project-links">
            <li>
              <form action="" target="_blank">
                <input type="submit" value="GitHub"/>
              </form>
            </li>
            <li>
              <form action="" target="_blank">
                <input type="submit" value="View Project"/>
              </form>
            </li>
          </ul>
        </div>
      </section>
      <section className="projects">
        <img src="" alt="" />
        <div className="content">
          <header>
            <h3>(Project name)</h3>
          </header>
            <p>(short project description)</p>
          <div>
            <strong>Technologies Used:</strong>
            <p>(Tech)</p>
          </div>
          <ul className="project-links">
            <li>
              <form action="" target="_blank">
                <input type="submit" value="GitHub"/>
              </form>
            </li>
            <li>
              <form action="" target="_blank">
                <input type="submit" value="View Project"/>
              </form>
            </li>
          </ul>
        </div>
      </section>
      <section className="projects">
        <img src="" alt="" />
        <div className="content">
          <header>
            <h3>(Project name)</h3>
          </header>
            <p>(short project description)</p>
          <div>
            <strong>Technologies Used:</strong>
            <p>(Tech)</p>
          </div>
          <ul className="project-links">
            <li>
              <form action="" target="_blank">
                <input type="submit" value="GitHub"/>
              </form>
            </li>
            <li>
              <form action="" target="_blank">
                <input type="submit" value="View Project"/>
              </form>
            </li>
          </ul>
        </div>
      </section>
    </MainBox>
  )
}

export default Main