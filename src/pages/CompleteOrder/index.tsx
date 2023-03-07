/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";
import { useCart } from "../../hooks/useCart";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Entrer le code postal"),
  street: zod.string().min(1, "informer la rue"),
  number: zod.string().min(1, "Signaler le numéro"),
  complement: zod.string(),
  district: zod.string().min(1, "Informer le voisinage"),
  city: zod.string().min(1, "Informer la Ville"),
  uf: zod.string().min(1, "Signaler à l'UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Renseignez le moyen de paiement" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/orderConfirmed", {
      state: data,
    });
    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  );
}
