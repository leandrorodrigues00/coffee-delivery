import { PaymentMethodsOptionContainer } from "./styles";

import { PaymentMethodsInput } from "../PaymentMethodsInput";
import { CreditCard, Bank, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/Typography";

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function PaymentMethodsOption() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod?.message as string;
  return (
    <PaymentMethodsOptionContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodsInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodsOptionContainer>
  );
}
