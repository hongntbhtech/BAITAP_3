import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import About from './pages/About';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home2/>}/>

      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
