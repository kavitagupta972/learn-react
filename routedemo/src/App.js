import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage/homepage';
import RouteHandle from './RouteHandle';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <RouteHandle/>
    </BrowserRouter>
    </div>
  );
}

export default App;