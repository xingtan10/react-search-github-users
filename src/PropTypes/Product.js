import PropTypes from "prop-types";
import React from "react";
import logo from "../assets/images/default-image.jpeg";
const Product = ({ image, name, price }) => {
  const url = image && image.url;
  console.log(name, image, price);
  return (
    <div>
      <h4>Single Product</h4>
      <img src={url || logo} alt={name || "default name"} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </div>
  );
};
// Product.propTypes = {
//   image: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

// Product.defaultProps = {
//   image: logo,
//   name: "default name",
//   price: 3.99,
// };
export default Product;
