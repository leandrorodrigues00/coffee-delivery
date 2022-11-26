import { PaymentMethodsInputContainer } from "./styles";
import { CreditCard } from "phosphor-react";

export function PaymentMethodsInput() {
  return (
    <PaymentMethodsInputContainer>
      <CreditCard size={16} />
      Cartão de crédito
    </PaymentMethodsInputContainer>
  );
}
