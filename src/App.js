
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Content from './components/content/content';
import {  BrowserRouter } from "react-router-dom";

function App(props) {
  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Navbar />
          <Content 
            ProFilePage={props.state.ProFilePage}
            addPost = {props.addPost} 
            changeNewPT = {props.changeNewPT}
            dialogList={props.state.DialogGroup} 
          />
        </BrowserRouter>
      </div>
  );
}


export default App;
