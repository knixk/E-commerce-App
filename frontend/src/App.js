import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/ProductDetails";

function App() {
  return (  
    <>
      <Router>
        <div className="App">
          <Toaster position="top-center"></Toaster>
          <Header />

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
