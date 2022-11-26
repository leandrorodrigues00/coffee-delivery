import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CartOrdersContainer } from "./styles";

export function CartOrders() {
  return (
    <CartOrdersContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CartOrdersContainer>
  );
}
