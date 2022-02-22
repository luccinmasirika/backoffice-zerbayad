import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Dashboard from "./screens/_dashboard";
import { AuthRoute, Login, P404, ProtectedRoute } from "components";
import { NewProduct, Orders, Order, Products, Dashboard } from "screens";

function App() {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="new-product" element={<NewProduct />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<Order />} />
        <Route path="*" element={<P404 />} />
      </Route>
    </Routes>
  );
}

export default App;
