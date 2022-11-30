import { RegularText, TitleText } from "../../components/Typography";
import { CompletedRequestContainer, OrderDetailsContainer } from "./styles";

import SuccessImg from "../../assets/SuccessImg.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CartOrders";
import { paymentMethods } from "../CartOrders/components/CompleteOrderForm/PaymentMethodsOption";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}
export function CompletedRequest() {
  const { colors } = useTheme();

  const { state } = useLocation() as LocationType;

  const navigate = useNavigate();
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <CompletedRequestContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido Confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em{" "}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={SuccessImg} alt="" />
      </section>
    </CompletedRequestContainer>
  );
}
