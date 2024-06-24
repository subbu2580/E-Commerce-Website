
import React from 'react'
import Products from './Products';

let Home = function () {
    return (
        <div>
            <div className="card text-bg-dark border-0">
                <img src="/assests/Shopping.jpg" className="card-img" alt="Imagee" height="550px" />
                <div className="card-img-overlay">
                    <div className='container'>
                    <h5 className="card-title display-3 fw-bolder mb-0 ">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
         
                </div>
            </div>
            <Products/>

        </div>
    )
}
export default Home;