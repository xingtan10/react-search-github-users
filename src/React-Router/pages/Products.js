import { Link, useParams } from "react-router-dom";
import products from "../data.js";

const Products = () => {
  return (
    <section className="section-product">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Products;
