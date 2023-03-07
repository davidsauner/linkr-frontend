import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./contexts/Context";

export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Context.Provider value={{ }}>
        <Routes>
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}
