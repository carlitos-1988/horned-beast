import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import dataBeast from "./jsonListAnimals.json";
import {Modal} from 'react-bootstrap/Modal';

const creator = "Juan Olmedo"

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">
      <Header creator={creator}> </Header>
      <Main jsonData ={dataBeast} modalShow={modalShow} setModalShow={setModalShow}/>
      <Footer creator={creator}></Footer>
    </div>
  );
}

export default App;
