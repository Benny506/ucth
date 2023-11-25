import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/about';

function App() {
  return (
    <div>
      <Routes>
        <Route 
          path='/'
          element={
            <Home />
          }
        />

        <Route 
          path='/doctors'
          element={
            <Home />
          }
        />

        <Route 
          path='/deparments'
          element={
            <Home />
          }
        />

        <Route 
          path='/schools'
          element={
            <Home />
          }
        />

        <Route 
          path='/about'
          element={
            <About />
          }
        />

        <Route 
          path='/contact'
          element={
            <Home />
          }
        />                                        
      </Routes>
    </div>
  );
}

export default App;
