import { RegularText, TitleText } from "../../components/Typography";
import { CompletedRequestContainer, OrderDetailsContainer } from "./styles";

import SuccessImg from "../../assets/SuccessImg.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";

export function CompletedRequest() {
  const { colors } = useTheme();
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
                Entrega em <strong> Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={SuccessImg} alt="" />
      </section>
    </CompletedRequestContainer>
  );
}
