import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home'
import { Usuario } from './components/Usuario';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/usuario' element={<Usuario />}></Route>
      </Routes>
    </div>
  );
}

export default App;
