
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Content from './components/content/content';
import {  BrowserRouter } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Navbar />
          <Content />
        </BrowserRouter>
      </div>
  );
}

export default App;
