import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
// import dataBeast from "./jsonListAnimals.json";

const creator = "Juan Olmedo"

// const myAnimalsAtApp = dataBeast;

class App extends React.Component{

  // constructor(props){
  //   super(props);
  //   this.state ={
  //     appBeast:myAnimalsAtApp
  //   }
  // }

  render(){
    return(
          <div className="App">
            <Header creator={creator}> </Header>
            <Main 
            //modalShow={modalShow}
            setModalShow={this.setModalShow}
            />
            <Footer creator={creator}></Footer>
          </div>)
  }
}

export default App;
