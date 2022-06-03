import { useFetch } from "../Custom-Hooks/useFetch.js";
import Product from "./Product.js";
const url = "https://course-api.com/react-prop-types-example";
// const url = "https://course-api.com/react-tours-project"
const PropTypes = () => {
  const { products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>Products</h2>

      <section>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};
export default PropTypes;
