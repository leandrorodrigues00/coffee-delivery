import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CartOrders } from "./pages/CartOrders";
import { CompletedRequest } from "./pages/CompletedRequest";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/new-cart" element={<CartOrders />} />
        <Route path="/orderConfirmed" element={<CompletedRequest />} />
      </Route>
    </Routes>
  );
}
