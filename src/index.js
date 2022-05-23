import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from "./components/redux/state"
import addPost from  "./components/redux/state"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state = {State} addPost={addPost}/>
  </React.StrictMode>
);
reportWebVitals();
