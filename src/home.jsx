import React, { Component } from "react";
import { Link } from "react-router-dom";
import products from "./product";
import "./style.css";

class home extends Component {
  render() {
    return (
      <div className='homepage'>

        {/* <header className='header'>
          <div className='logo'>Planti</div>
          <nav className='nav'>
            <a href='App.jsx'>Home</a>
            <a href='/products'>Products</a>
            <a href='/cart'>Cart</a>
            <a href='/login'>Login</a>
          </nav>
        </header> */}

        <div className='banner'>
          <h1>Welcome to Planti store</h1>
          <p>Find the perfect plants for your home</p>
        </div>

        <div className="fact">
          <h2>Why Us?</h2>
          <div className="fact-content">
            <img src="https://i.pinimg.com/enabled_lo/564x/90/d3/df/90d3df8e7d6fbc2e788a8aabf379f2da.jpg" alt="Plant" />
            <p>
              Planti stands out for its curated selection of
              high-quality plants and nature-inspired decor, personalized care
              tips, and eco-friendly products. It offers a seamless,
              user-friendly shopping experience with tailored recommendations,
              unique decor items, and excellent customer support. Unlike other platforms,
              Planti fosters a community of plant lovers, providing both inspiration and expert
              guidance to help you maintain healthy, beautiful plants.
            </p>
          </div>
        </div>

          <div className="product">
          <h2>Customer Favorite</h2>
          <div className='product-list'>
            {products.map((product) => (
              <div className='product-card' key={product.name}>
                <Link to={`/products/${product.name}`}>
                  <img src={product.image} alt={product.title} />
                </Link>
                <div className='product-info'>
                  <h3>{product.title}</h3>
                  <p>{product.price}</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* <div className="product">
          <h2>Customer Favorite</h2>
          <div className='product-list'>

            <div className='product-card'>
              <Link to="/ProductDetail">
                <img src='https://i.pinimg.com/736x/52/0d/0a/520d0ae615a7bfc36868e56b94e1185f.jpg' alt='Product 1' />
              </Link>
              <div className='product-info'>
                <h3>Rose</h3>
                <p>$29.99</p>
                <button>Add to Cart</button>
              </div>
            </div>

            <div className='product-card'>
              <img src='https://i.pinimg.com/736x/37/31/50/373150c83f0d29d39a48cb04f87350a0.jpg' alt='Product 2' />
              <div className='product-info'>
                <h3>Aloe Vera</h3>
                <p>$39.99</p>
                <button>Add to Cart</button>
              </div>
            </div>

            <div className='product-card'>
              <img src='https://i.pinimg.com/564x/b4/25/93/b42593d59c37b8de5289694dc2b458cf.jpg' alt='Product 3' />
              <div className='product-info'>
                <h3>Barberton daisy</h3>
                <p>$19.99</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div> */}


        <div className="promo">
          <h2>Bundle Discount</h2>
          <div className='product-list'>
            {/* Product 1 */}
            <div className='product-card'>
              <img src='https://i.pinimg.com/enabled_lo/564x/0c/4b/f5/0c4bf594c7dfde9769077fd9de3a9b12.jpg' alt='Product 1' />
              <div className='product-info'>
                <h3>Starter Bundle</h3>
                <p><span>$10.83</span> only $6.99!</p>
                <button>Add to Cart</button>
              </div>
            </div>

            {/* Product 2 */}
            <div className='product-card'>
              <img src='https://i.pinimg.com/enabled_lo/564x/0c/1b/16/0c1b1667e5b0f322161630d488068cbb.jpg' alt='Product 2' />
              <div className='product-info'>
                <h3>Home Sweet Home</h3>
                <p><span>$192.99</span> only $190.25!</p>
                <button>Add to Cart</button>
              </div>
            </div>

            {/* Product 3 */}
            <div className='product-card'>
              <img src='https://i.pinimg.com/enabled_lo/564x/37/ea/f8/37eaf8eecafc6b979c75ba6ea9ba12f8.jpg' alt='Product 3' />
              <div className='product-info'>
                <h3>Valentine on Line</h3>
                <p><span>$182.99</span> only $100.25!</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>

        </div>


        {/* <footer className='footer'>
          <p>&copy; 2024 E-Commerce. All rights reserved.</p>
          <div className='social-media'>
            <a href='#'>Facebook</a>
            <a href='#' class='mid'>Twitter</a>
            <a href='#'>Instagram</a>
          </div>
        </footer> */}
      </div>
    );

  }
}

export default home;