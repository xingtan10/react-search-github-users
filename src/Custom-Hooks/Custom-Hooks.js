import { useFetch } from "./useFetch";
const url = "https://course-api.com/react-store-products";
// const url = "https://course-api.com/react-tours-project"
const CustomHooks = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? "Loading" : "data"}</h2>
    </div>
  );
};
export default CustomHooks;
