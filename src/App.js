
import './App.css';
import {Routes ,Route} from 'react-router-dom';
import Home from './Home';
import Result from './Result';

function App() {
  return (
    <Routes>
     <Route path='/' element= { <Home /> } />
     <Route path='Result' element= { <Result /> } />
    </Routes>

  );
}

export default App;
