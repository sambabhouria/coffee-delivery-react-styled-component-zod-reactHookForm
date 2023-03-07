import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

import confirmedOrderIllustration from "../../assets/confirmed-order.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";

import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmedPage() {
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
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Hein! commande confirmée</TitleText>
        <RegularText size="l" color="subtitle">
          Maintenant, attends juste que le café vienne bientôt à toi
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconColor={colors["brand-purple"]}
            text={
              <RegularText>
                Livraison en
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
            iconColor={colors["brand-yellow"]}
            text={
              <RegularText>
                Prévision de livraison
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconColor={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                paiement à la livraison
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}
