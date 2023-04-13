import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import dataBeast from "./jsonListAnimals.json";
import {Modal} from 'react-bootstrap/Modal';

const creator = "Juan Olmedo"

class App extends React.Component{
  
  // setModalShow = (argumentTest)=>{
  //   console.log("It works!");
  // }

  

  render(){
    return(
          <div className="App">
            <Header creator={creator}> </Header>
            <Main jsonData ={dataBeast} 
            //modalShow={modalShow}
            setModalShow={this.setModalShow}
            />
            <Footer creator={creator}></Footer>
          </div>)
  }
}

//function App() {
  //const [modalShow, setModalShow] = React.useState(false);
  


//   return (
//     <div className="App">
//       <Header creator={creator}> </Header>
//       <Main jsonData ={dataBeast} 
//       //modalShow={modalShow}
//       setModalShow={setModalShow}
//       />
//       <Footer creator={creator}></Footer>
//     </div>
//   );
// }

export default App;
