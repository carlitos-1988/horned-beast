import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header  creator={"Juan Olmedo"}> </Header>
      <Main />

      <Footer  creator={"Juan Olmedo"}></Footer>
       
    </div>
  );
}

export default App;
