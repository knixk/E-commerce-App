import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
