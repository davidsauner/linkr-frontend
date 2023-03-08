import React from "react";
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from "./contexts/Context";
import HomePage from './pages/HomePage/HomePage';
import SignUp from './pages/SignUpPage/SignUp';
import Timeline from './pages/TimelinePage/Timeline';
import Hashtag from './pages/HashtagPage/Hashtag';
import User from './pages/UserPage/User'

export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Context.Provider value={{}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/timeline' element={<Timeline />} />
          <Route path='/hashtag/:hashtag' element={<Hashtag />} />
          <Route path='/user/:id' element={<User />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
    
  );
}
