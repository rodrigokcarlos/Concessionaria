import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Vender from './pages/Vender';
import Comprar from './pages/Comprar';
import Avaliar from './pages/Avaliar';
import Contato from './pages/Contato';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/comprar' element={<Comprar/>} />
          <Route path='/vender' element={<Vender/>} />
          <Route path='/avaliar' element={<Avaliar/>} />
          <Route path='/contato' element={<Contato/>} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
