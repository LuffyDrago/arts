import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";

import "./default.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
