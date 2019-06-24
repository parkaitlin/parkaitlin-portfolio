import React, {Component} from "react"
import './index.css'
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Main from "../components/Main"

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
