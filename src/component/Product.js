import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  return (
    <div>
      <div className='container py-5'>
        <div className='row py-4'>
          <>
            <div className='col-md-6'>
              <img src={product.image} alt={product.title} height="400px" width="400px" />
            </div>
            <div className='col-md-6'>
              <h4 className='text-uppercase text-black-50'>{product.category}</h4>
              <h1 className='display-5'>{product.title}</h1>
              <p className='lead fw-bolder'>
                Rating: {product.rating ? `${product.rating.rate} ` : 'Not rated '}
                <i className='fa fa-star'></i>
              </p>
              <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
              <p className='lead'>{product.description}</p>
              <button className='btn btn-outline-dark px-4 py-2'
             
              >
                Add To Cart
              </button>
              <NavLink to="/cart" className="btn btn-dark mx-2 px-3 py-2">
                Go To Cart
              </NavLink>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Product;


