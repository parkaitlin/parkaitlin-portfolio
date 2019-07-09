import React, {Component} from "react"
import './index.css'
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
import { Helmet } from 'react-helmet'


class Portfolio extends Component {
  state = {
    
  }
  render(){
    return(
      <div className="index">
        <Helmet 
          title="parkaitlin"
          meta={[
            {
              name: "description",
              content: "Kaitlin Park - Software Developer"
            },
            {
              name: "keywords",
              content: "frontend, backend, software, developer, engineer",
            },
          ]}
          link={[
            { rel: "icon", type: "image/png", sizes: "16x16", href:"imgs/kplogo.png"},
          ]}
        />
        <Header />
        <Banner />
        <Main />
        <Footer />
      </div>
    )
  }
} 
  
export default Portfolio
