import { useState } from "react"
import { Browser, BrowserRouter, Route, Routes } from "react-router-dom"
import UserContext from "./context/UserContext"
import BlogDetail from "./pages/BlogDetail/BlogDeatail"
import Home from "./pages/Home/Home"
// import data from "./database/data.json"

function App() {
  const [UserId, setUserId] = useState(1)
  const [isLogin, setIsLogin] = useState(false)
  return (
    <UserContext.Provider value={{ UserId, isLogin }}>
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
    </UserContext.Provider>
  );
}

export default App;