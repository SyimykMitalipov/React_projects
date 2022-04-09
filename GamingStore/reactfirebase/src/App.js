import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Approuter from './components/AppRouter';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Approuter />
    </BrowserRouter>
  );
}

export default App;
