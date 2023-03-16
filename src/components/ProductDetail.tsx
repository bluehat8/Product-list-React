// import { useParams } from "react-router-dom";

// const ProductDetails = () =>{
//     const { id, nombre, imagen, descripcion, precio } = useParams();

//      return (
//       <div>
//         <h1>ProductDetails: {id}</h1> 
//         <p>Nombre del producto:{nombre}</p>
//         <img src={imagen}/>

//         <p>Descripcion: {descripcion}</p>
//         <p>Precio : {precio}</p>
//       </div>
//      );
// }

// export default ProductDetails;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../CSS/ProductDetail.css";
import { Button } from 'react-bootstrap';




interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

const ProductDetails = () =>{
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }


    const handleAddToWishlist = () => {
      // Lógica para añadir a la lista de deseos
    };
  
    const handleAddToCart = () => {
      // Lógica para añadir al carrito de compras
    };
  
    const handleIncreaseQuantity = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img src={product.image} alt={product.title} style={{ height:"40rem"}} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p className="text-muted">{product.category}</p>
            <p className="text-muted">{product.description}</p>
            <h3>${product.price.toFixed(2)}</h3>
            <div className="d-flex my-3">
              <Button variant="primary" className="mr-3" onClick={handleAddToWishlist}>Añadir a la lista de deseos</Button>
              <Button variant="success" onClick={handleAddToCart}>Añadir al carrito</Button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Button variant="light" className="me-2" onClick={handleDecreaseQuantity}>-</Button>
                <p className="m-0">{quantity}</p>
                <Button variant="light" className="ms-2" onClick={handleIncreaseQuantity}>+</Button>
              </div>
              <Button variant="outline-primary">Comprar ahora</Button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductDetails;