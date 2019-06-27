import styled from 'styled-components'


export const FootFooter = styled.footer`
  background-color: rgb(43, 49, 85);
  border-top: 2px solid white;
`

export const InnerFooter = styled.div`
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
    justify-content: center;
  }
  .icon {
    font-size: 5vh;
    color: white;
    margin: 0 0.75em .8em 0;
  }
  .icon:hover {
    color: #00ffaa;
  }
  .email, .cell {
    margin-left: 1em;
    padding-left: 1em;
    border-left: 1px solid #a7adba;
  }
  .copyright {
    color: #a7adba;
    font-family: 'Abel', sans-serif;
    font-size: 1.25em;   
  }
  @media (max-width: 564px) {
    .copyright {
      flex-direction: column;
      align-items: center;
    }
    .email, .cell {
      margin: 0;
      padding: 0;
      border: none;
    }
    .icon {
      margin: 0 .5em .5em .5em;
    }
    .copyright > li {
      margin: 0 0 .5em 0;
    }
  }
`