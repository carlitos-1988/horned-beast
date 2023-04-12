import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import dataBeast from "./jsonListAnimals.json";

const creator = "Juan Olmedo"

function App() {
  return (
    <div className="App">
      <Header creator={creator}> </Header>
      <Main jsonData ={dataBeast}/>
      <Footer creator={creator}></Footer>
    </div>
  );
}

export default App;
