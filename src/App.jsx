import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Analytics } from "@vercel/analytics/next"
import "./index.css";


import MouseLens from "./components/MouseLens";
import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import CategoryPage from "./pages/CategoryPage"; 
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <MouseLens />
        <Header />      
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          
          {/* <Route path="/ux" element={<CategoryPage categoryType="ux" />} /> */}
          <Route path="/game" element={<CategoryPage categoryType="game" />} />
          {/* <Route path="/media" element={<CategoryPage categoryType="media" />} /> */}
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;