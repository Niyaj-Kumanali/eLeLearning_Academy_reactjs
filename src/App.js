import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Home />
      </div>
    </BrowserRouter>
  );
}

