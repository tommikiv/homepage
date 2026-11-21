import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/homepage">
      <Navbar />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
