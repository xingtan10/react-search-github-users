import { useEffect, useState, useCallback, useMemo } from "react";
import { Button } from "semantic-ui-react";
import { UseFetch } from "../PropTypes/UseFetch";
import React from "react";

const url = "https://course-api.com/javascript-store-products";

//Every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const UseMemo = () => {
  const { products } = UseFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );
  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={() => setCount(count + 1)} content="Click Me" primary />
      <h1>cart: {cart}</h1>
      <h1>Most Expensive: ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </div>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("big list called");
  });
  return (
    <section>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
        // console.log(product.id, product.fields.name);
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.log("SingleProduct called");
  });
  let { id, name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;
  return (
    <div>
      <article>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <Button primary content="add to cart" onClick={addToCart} />
      </article>
    </div>
  );
};
export default UseMemo;
