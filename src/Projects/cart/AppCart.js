import Navbar from "./Navbar.js";
import CartContainer from "./CartContainer.js";
import { useGlobalContext } from "./context.js";
const AppCart = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default AppCart;
