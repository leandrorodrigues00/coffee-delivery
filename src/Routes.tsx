import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CartContext } from "./contexts/CartContext";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CartOrders } from "./pages/CartOrders";
import { CompletedRequest } from "./pages/CompletedRequest";
import { Home } from "./pages/Home";

export function Router() {
  const { cartItems } = useContext(CartContext);

  let hasItems = cartItems.length;
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/new-cart"
          element={hasItems ? <CartOrders /> : <Navigate replace to={"/"} />}
        />
        <Route path="/orderConfirmed" element={<CompletedRequest />} />
      </Route>
    </Routes>
  );
}
