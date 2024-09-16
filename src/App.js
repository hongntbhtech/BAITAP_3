import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Home2 from './pages/Home2';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home2/>}/>
    </Routes>
    </>
  );
}

export default App;
