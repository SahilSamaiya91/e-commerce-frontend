import "./App.css";
import Login from "./component/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Register from "./component/Register";
import Homepage from "./pages/Homepage";
import Header from "./component/Header";
import Products from "./component/Products";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/b/:brand" element={<Products />} />
            <Route path="/p/:title" element={<ProductDetailsPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
