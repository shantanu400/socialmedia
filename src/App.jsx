import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Viewproduct from "./Component/Viewproduct";
import Viewprodrouting from "./Component/Viewprodrouting";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewproduct/" element={<Viewprodrouting />} />
          <Route path="/viewproduct/:id" element={<Viewproduct />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
