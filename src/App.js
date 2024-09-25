import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'; // Adjust this path based on your actual reducers
import './App.css';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import About from './pages/About';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Team from './pages/Team';
import Contact from './pages/Contact';

// Create the Redux store
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home2 />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/team' element={<Team />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Provider>
  );
}

export default App;
