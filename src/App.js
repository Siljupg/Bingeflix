import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NetflixShowPage from './pages/NetflixShowPage';
import SignInPage from './pages/SigInPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/netflix-show" element={<NetflixShowPage />} />
          <Route path='/sign-in' element={<SignInPage/>}/>
          {/* <Route path='/now-showing' element={<NowShowing/>}/> */}
          <Route path='/sigh' element={''}/>
          <Route path='/sigh' element={''}/>
          <Route path='/sigh' element={''}/>
          <Route path='/sigh' element={''}/>
          <Route path='/sigh' element={''}/>
          <Route path='/sigh' element={''}/>
          <Route path='/sigh' element={''}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

