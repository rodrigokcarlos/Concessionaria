import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Vender from './pages/Vender';
import Avaliar from './pages/Avaliar';
import Equipe from './pages/Equipe';
import Hatch from './pages/Hatch';
import Sedan from './pages/Sedan';
import SUV from './pages/SUV';
import CarroHatch from './pages/CarroHatch';
import CarroSedan from './pages/CarroSedan';
import CarroSUV from './pages/CarroSUV';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/hatch' element={<Hatch/>} />
          <Route path='/sedan' element={<Sedan/>} />
          <Route path='/suv' element={<SUV/>} />
          <Route path='/vender' element={<Vender/>} />
          <Route path='/avaliar' element={<Avaliar/>} />
          <Route path='/equipe' element={<Equipe/>} />
          <Route path='/hatch/:id' element={<CarroHatch/>}/>
          <Route path='/sedan/:id' element={<CarroSedan/>}/>
          <Route path='/suv/:id' element={<CarroSUV/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
