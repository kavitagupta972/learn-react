import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage/homepage';

function App() {
  return (
    <div className="App">
    <BrowserRouter><HomePage/></BrowserRouter>
    </div>
  );
}

export default App;