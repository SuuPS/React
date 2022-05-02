
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile'
import Content from './components/content/content'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Profile />
      <Content />
    </div>
  );
}

export default App;
