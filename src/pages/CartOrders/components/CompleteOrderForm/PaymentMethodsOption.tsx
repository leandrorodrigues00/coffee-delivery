import { PaymentMethodsInput } from "../PaymentMethodsInput";
import { PaymentMethodsOptionContainer } from "./styles";

export function PaymentMethodsOption() {
  return (
    <PaymentMethodsOptionContainer>
      <PaymentMethodsInput />
      <PaymentMethodsInput />
      <PaymentMethodsInput />
    </PaymentMethodsOptionContainer>
  );
}
