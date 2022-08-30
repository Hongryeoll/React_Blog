import React from "react"
import { Browser, BrowserRouter, Route, Routes } from "react-router-dom"
import BlogDetail from "./pages/BlogDetail/BlogDeatail"
import Home from "./pages/Home/Home"
import data from "./database/data.json"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home/>}
        />
        <Route 
          path="/blog/:id"
          element={<BlogDetail/>} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;