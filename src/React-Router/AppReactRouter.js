import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

function AppReactRouter() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <nav>our navbar</nav>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer>footer</footer>
    </BrowserRouter>
  );
}

export default AppReactRouter;
