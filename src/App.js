import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Compare from './Compare';
import Timeline from './Timeline';

function App() {
  
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Compare' element={<Compare />} />
      <Route path='Timeline' element={<Timeline />} />
    </Routes>

  );
}

export default App;
