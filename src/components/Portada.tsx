import React from "react";
import "../CSS/App.css";
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from "react-bootstrap";



function Portada() {
  return (
   <div className="portada d-flex align-items-center justify-content-center">
      <div className="portada-contenido text-center">
        <h1>Bienvenidos a nuestra tienda</h1>
        <p>Encuentra los mejores productos a precios increíbles</p>
        <Button  variant="primary" >Ver productos</Button>
      </div>
    </div>
  );
}

export default Portada;