import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import Login from "./pages/Login";
import { useState } from "react";
import Home from "./pages/Home"
import "./App.css"
import Register from "./pages/Register";
import SideBar from "./components/Sidebar";


function App() {
  const token =localStorage.getItem("token")

  if(!token) {
    return <Login />
  }
  return (
    
    <div className="App">
       <Routes>
        <Route path="/"  element={<Login />}/>
        <Route path="/Register" element={<Register/>} />
        </Routes>
    <SideBar>

      <Routes>
        <Route path="/"  element={<Login />}/>
        <Route path="/Register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />

      </Routes>
      </SideBar>
  
    </div>
  );
}

export default App;
