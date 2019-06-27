import React, {Component} from "react"
import './index.css'
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"

class Portfolio extends Component {
  state = {

  }
  render(){
    return(
      <>
        <Header />
        <Banner />
        <Main />
        <Footer />
      </>
    )
  }
} 
  
export default Portfolio
