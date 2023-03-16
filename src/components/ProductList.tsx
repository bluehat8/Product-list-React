import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { fetchProducts, setSearchTerm } from "../store/productsSlice";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Card, Button,Col,Row } from "react-bootstrap";
import "../CSS/ProductList.css";
import { FaBorderStyle, FaHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom";








const ProductList: React.FC = () => {

  type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

  const dispatch: AppDispatch = useDispatch();

  const products = useSelector((state: RootState) => state.products.products);
  const searchTerm = useSelector((state: RootState) => state.products.searchTerm);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div >
        <div className="titulo">
        <h1>Filtro de productos</h1> 
        </div>
      <div className="search-container">
      <input
        type="text"
        placeholder="Ingresa título o descripción del producto"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        style={{ width: "70%" }}

      />
      </div>
       <div className="product-list">
        {filteredProducts.map((product) => (

          
          <Card key={product.id} style={{ width: "18rem" }}>
            
            <Card.Img variant="top" src={product.image} style={{ height: "15rem" }} />
            
            
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary">{product.price}€</Button>
              <button id="deseos" className="mr-auto" style={{ margin: "5%" }}><FaHeart /></button>
              
              <NavLink to={`/products/${product.id}`}>Ver detalles</NavLink>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;