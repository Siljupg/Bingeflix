import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NetflixShowPage from './pages/NetflixShowPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/netflix-show" element={<NetflixShowPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

