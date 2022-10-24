import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NumberOrText from './pages/NumberOrText';
import ColorText from './pages/ColorText';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/:id" element={<NumberOrText/>}/>
        <Route path='/:id/:color/:bgcolor' element={<ColorText/>}/>
      </Routes>
    </div>
  );
}

export default App;
