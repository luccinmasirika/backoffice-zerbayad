import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Dashboard from "./screens/_dashboard";
import { AuthRoute, Login, P404, ProtectedRoute } from "components";
import { NewProduct, Orders, Order, Products, Dashboard } from "screens";

import { ThemeProvider } from "@mui/material";

import { theme } from "utils";
import { useSelector } from "react-redux";

function App() {
  const { mode } = useSelector((state) => state.themeMode);

  return (
    <ThemeProvider theme={theme(mode)}>
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
    </ThemeProvider>
  );
}

export default App;
