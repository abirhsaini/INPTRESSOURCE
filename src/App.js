import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home"
import "./App.css"
import Register from "./pages/Register";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />}/>
        <Route path="/Register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
