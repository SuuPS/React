
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost, changeNewPT, subscribe} from "./components/redux/state"

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderAnyTree = (state) => {

  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} changeNewPT={changeNewPT}/>
    </React.StrictMode>
  );
  reportWebVitals();
}

rerenderAnyTree(state)

subscribe(rerenderAnyTree)