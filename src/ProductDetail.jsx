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
    const [selectedSize, setSelectedSize] = useState(''); 
  
    if (!product) {
      return <div>Product sold out</div>; 
}

  const handleSizeChange = (event) => {
    const size = event.target.value;
    setSelectedSize(size);

    
    if (size === 'Small') {
      setCurrentImage(product.variations[2]); 
    } else if (size === 'Medium') {
      setCurrentImage(product.variations[1]); 
    } else if (size === 'Large') {
      setCurrentImage(product.variations[0]); 
    }
  };

  const handleVariationClick = (size, image) => {
    setSelectedSize(size);
    setCurrentImage(image);
  };

  return (
    <div className="container">
    <div className="product-detail">
      <div className="product-image">
        <img src={currentImage} alt={product.title} />
        <div className="product-variation">
          {product.variations.map((variation, index) => {
            const sizeLabel = index === 0 ? 'Large' : index === 1 ? 'Medium' : 'Small';
            return (
              <img
                key={index}
                src={variation}
                alt={`Variation ${sizeLabel}`}
                onClick={() => handleVariationClick(sizeLabel, variation)}
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

        <div className='product-size'>
          <label>Size: </label>
          <select onChange={handleSizeChange} 
          value={selectedSize}>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
          </select>
        </div>

          <div className='product-quantity'>
            <label>Total: </label>
            <input type='number' min='1' max='200' defaultValue='1' />
          </div>

          <div className="product-buttons">
            <button style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}>
              Add to cart
            </button>
            <button style={{
              backgroundColor: "#FF5722",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}>
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




// const ProductDetail = () => {
//   const inlineStyles = {
//     productInfo: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       padding: "20px",
//     },
//     productPrice: {
//       fontSize: "1.5rem",
//       color: "#a9a895",
//       margin: "10px 0",
//     },
//     addToCartButton: {
//       backgroundColor: "#4CAF50",
//       color: "#fff",
//       padding: "10px 20px",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//     },
//     orderNowButton: {
//       backgroundColor: "#FF5722",
//       color: "#fff",
//       padding: "10px 20px",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//     },
//   };

//   return (
//     <div className="container">
//         {/* <header className='header'>
//           <div className='logo'>Planti</div>
//           <nav className='nav'>
//             <a href='App.jsx'>Home</a>
//             <a href='/products'>Products</a>
//             <a href='/cart'>Cart</a>
//             <a href='/login'>Login</a>
//           </nav>
//         </header> */}


//       <div className='product-detail'>
//         <div className='product-image'>
//           <img src='https://i.pinimg.com/736x/ea/98/54/ea9854c410e524ff0040ba1c6f60ad0c.jpg' alt='rose' />
//           <div className='product-variation'>
//             <img src='https://i.pinimg.com/736x/03/82/ad/0382addc09068b11ce02c732daf47934.jpg' alt='red' />
//             <img src='https://i.pinimg.com/736x/1a/46/9f/1a469fe8cbffa30f5e345a7749d534f9.jpg' alt='yellow' />
//             <img src='https://i.pinimg.com/736x/8e/73/2a/8e732ab15e4eb39ea0a69415ca2d08cf.jpg' alt='white' />
//           </div>
//         </div>
//         <div className={styles.productInfo}>
//           <h1 className='product-title'>Fresh rose bouquet</h1>
//           <p style={inlineStyles.productPrice}>Rp. 50.000,00</p>
//           <div className='product-rating'>
//             <span>Rating: ★★★★☆</span>
//           </div>
//           <div className='product-size'>
//             <label>Size: </label>
//             <select>
//               <option value='Small'>Small</option>
//               <option value='Medium'>Medium</option>
//               <option value='Large'>Large</option>
//             </select>
//           </div>


//           <div className='product-quantity'>
//             <label>Total: </label>
//             <input type='number' min='1' defaultValue='1' />
//           </div>


//           <div className='product-buttons'>
//             <button style={inlineStyles.addToCartButton}>
//               Add to cart
//             </button>
//             <button style={inlineStyles.orderNowButton}>Message</button>
//           </div>


//           <div className='product-description'>
//             <h2>Product Description</h2>
//             <p>
//             Discover the timeless charm of our Rose Bouquet, 
//             featuring 10 elegant stems of fresh roses. Hand-tied and 
//             beautifully arranged, it’s the perfect gift for any occasion. 
//             Available in three stunning variations—Red, White, and Yellow—each 
//             color carries a unique meaning, perfect for expressing love, purity, 
//             or joy.
//             </p>
//           </div>
//         </div>
//       </div>

{/* <footer className='footer'>
          <p>&copy; 2024 E-Commerce. All rights reserved.</p>
          <div className='social-media'>
            <a href='#'>Facebook</a>
            <a href='#' class='mid'>Twitter</a>
            <a href='#'>Instagram</a>
          </div>
        </footer> */}

//     </div>
//   );
// };

// export default ProductDetail;