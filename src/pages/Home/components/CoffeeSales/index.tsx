import { TitleText } from "../../../../components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, CoffeeSalesContainer } from "./styles";
import { coffees } from "../../../../data/coffees";
export function CoffeeSales() {
  return (
    <CoffeeSalesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeeSalesContainer>
  );
}
