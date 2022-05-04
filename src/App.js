
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Content from './components/content/content';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
