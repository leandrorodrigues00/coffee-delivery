import { CoffeeSales } from "./components/CoffeeSales";
import { IntroSection } from "./components/IntroSection";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <IntroSection />
      <CoffeeSales />
    </HomeContainer>
  );
}
