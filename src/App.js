 
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Components/style.css';
import { BookProvider } from './contexts/BookContext';
import About from './pages/About';
import  RecommendationForm from './pages/Recomanded'
import Favorate from './pages/Favorate';
// Lazy load components
const Main = lazy(() => import('./Components/Main'));
const NavBar = lazy(() => import('./Components/Nabar')); 

const App = () => {
  
  
  return (
    <BookProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <Routes> 
            <Route exact path="/" element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="RecommendationForm" element={< RecommendationForm />} />
            <Route path="Favorate" element={< Favorate />} />
          </Routes>
        </Suspense>
      </Router>
    </BookProvider>
  );
};

export default App;
