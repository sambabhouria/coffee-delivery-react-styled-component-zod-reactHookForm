import {
  BenefitsContainer,
  HeroContainer,
  HeroContent,
  HeroTitle,
} from "./styles";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import heroImage from "../../../../assets/hero-image.png";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { RegularText } from "../../../../components/Typography";

export function Hero() {
  const { colors } = useTheme();

  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">
              Trouvez le café parfait à tout moment de la journée
            </HeroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Avec Coffee Delivery, vous obtenez votre café où que vous soyez, à
              tout moment heure
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconColor={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Achat simple et sécurisé"
            />
            <InfoWithIcon
              iconColor={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="L'emballage garde le café intact"
            />
            <InfoWithIcon
              iconColor={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="L'emballage garde le café intact"
            />
            <InfoWithIcon
              iconColor={colors["brand-purple"]}
              icon={<Coffee weight="fill" />}
              text="
              Le café vous arrive frais"
            />
          </BenefitsContainer>
        </div>

        <div className="imageContainer">
          <img src={heroImage} alt="" />
        </div>
      </HeroContent>
    </HeroContainer>
  );
}
