import "./App.css";
import Login from "./component/Login";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Register from "./component/Register";


function App() {
  return (
    <>
    <Navbar />
      
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
