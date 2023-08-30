import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/font-awesome.min.css";
import "./styles/linearicons.css";
import "./styles/main.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPageFound from "./pages/NoPageFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="home" exact element={<Home />}></Route>
        <Route path="*" exact element={<NoPageFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
