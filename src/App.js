import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./contexts/Context";
import Trending from "./components/Trending";

export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Context.Provider value={{ }}>
        <Routes>
        <Route path="/" element={<Trending />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}
