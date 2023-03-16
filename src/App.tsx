import React from "react";
import { Provider } from "react-redux";
import ProductList from "./components/ProductList";
import { store } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/ProductList.css";
/*import { Navbar, Nav, Container, Button } from 'react-bootstrap';*/
import Navbar from "./components/Navbar";
import Portada from "./components/Portada";
import Footer from "./components/Footer";
import "./CSS/App.css";
import "./CSS/Footer.css";
import "./CSS/ProductDetail.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';





function App() {
  return (
    <Provider store={store}>

      <div className="App">
      <Router>
          <Navbar />
          <Portada />

          <Routes>
            <Route path="/" element={<ProductList />} />
            
            <Route path="/products/:id" element={<ProductDetail/>} />
          </Routes>

          <Footer/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
