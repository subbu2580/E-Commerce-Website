import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setData(response.data);
                setFilter(response.data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                    <div>
                        <div className="buttons d-flex justify-content-center">
                            <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                            <button className="btn btn-outline-info me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                            <button className="btn btn-outline-success me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                            <button className="btn btn-outline-primary me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                            <button className="btn btn-outline-secondary me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
                        </div>
                        {filter.map((Product) => (
                            <div style={{ float: "left", marginRight: "10px", marginTop: "15px", width: "300px" }} key={Product.id}>
                                <div className="card h-100 text-center p-4">
                                    <img src={Product.image} className="card-img-top" alt={Product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{Product.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold">${Product.price}</p>
                                        <NavLink to={`/product/${Product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};    

export default Products;

