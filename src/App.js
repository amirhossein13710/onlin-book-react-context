import React from "react";
import {DataProvider} from "./components/context/Context"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import YourLibrary from "./components/YourLibrary";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Home from "./components/Home";
import Detailes from "./components/details/Detailes";
import ReadBook from "./ReadBook";
import Login from "./aouth/Login";
import Register from "./aouth/Register";
import Footer from "./components/Footer";

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Detailes />} />
          <Route path="/your-library" element={<YourLibrary />} />
          <Route path="/your-library/:id" element={<ReadBook/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
