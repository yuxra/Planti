import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "./product";
import styles from "./ProductDetail.module.css";
import "./ProductDetail.css";

const ProductDetail = () => {
  const inlineStyles = {
    productInfo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "20px",
    },
    productPrice: {
      fontSize: "1.5rem",
      color: "#a9a895",
      margin: "10px 0",
    },
    addToCartButton: {
      backgroundColor: "#4CAF50",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    orderNowButton: {
      backgroundColor: "#FF5722",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  const { name } = useParams();
  const product = products.find((p) => p.name === name);

  const [currentImage, setCurrentImage] = useState(product ? product.image : '');
  const [selectedOption, setSelectedOption] = useState('');

  if (!product) {
    return <div>Product sold out</div>;
  }

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);

    if (product.title === 'Rose Bouquet') {
      // Map warna ke variasi gambar
      const colorMap = {
        Red: product.variations[0],
        Yellow: product.variations[1],
        White: product.variations[2],
      };
      setCurrentImage(colorMap[option]);
    } else {
      // Map ukuran ke variasi gambar
      const sizeMap = {
        Small: product.variations[2],
        Medium: product.variations[1],
        Large: product.variations[0],
      };
      setCurrentImage(sizeMap[option]);
    }
  };

  return (
    <div className="container">
      <div className="product-detail">
        <div className="product-image">
          <img src={currentImage} alt={product.title} />
          <div className="product-variation">
            {product.variations.map((variation, index) => {
              const label = product.title === 'Rose Bouquet'
                ? ['Red', 'Yellow', 'White'][index]
                : ['Large', 'Medium', 'Small'][index];
              return (
                <img
                  key={index}
                  src={variation}
                  alt={`Variation ${label}`}
                  onClick={() => handleOptionChange({ target: { value: label } })}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.productInfo}>
          <h1 className="product-title">{product.title}</h1>
          <p style={{ fontSize: "1.5rem", color: "#a9a895", margin: "10px 0" }}>
            {product.price}
          </p>
          <div className="product-rating">
            <span>Rating: ★★★★☆</span>
          </div>

          <div className='product-option'>
            <label>{product.title === 'Rose Bouquet' ? 'Color' : 'Size'}: </label>
            <select onChange={handleOptionChange} value={selectedOption}>
              {product.title === 'Rose Bouquet' ? (
                <>
                  <option value='Red'>Red</option>
                  <option value='Yellow'>Yellow</option>
                  <option value='White'>White</option>
                </>
              ) : (
                <>
                  <option value='Small'>Small</option>
                  <option value='Medium'>Medium</option>
                  <option value='Large'>Large</option>
                </>
              )}
            </select>
          </div>

          <div className='product-quantity'>
            <label>Total: </label>
            <input type='number' min='1' max='200' defaultValue='1' />
          </div>

          <div className="product-buttons">
            <button style={inlineStyles.addToCartButton}>
              Add to cart
            </button>
            <button style={inlineStyles.orderNowButton}>
              Order Now
            </button>
          </div>

          <div className="product-description">
            <h2>Product Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
