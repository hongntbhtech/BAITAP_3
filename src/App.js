import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import About from './pages/About';
import Service from './pages/Service';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home2/>}/>

      <Route path='/about' element={<About/>}/>

      <Route path='/service' element={<Service/>}/>
    </Routes>
    </>
  );
}

export default App;
