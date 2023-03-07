import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
      <div className="row">
        <Input
          placeholder="CEP"
          type="number"
          className="cep"
          {...register("cep")}
          error={errors.cep?.message}
        />
      </div>
      <div className="row">
        <Input
          placeholder="Deux"
          className="street"
          {...register("street")}
          error={errors.street?.message}
        />
      </div>
      <div className="row">
        <Input
          type="number"
          placeholder="Nombre"
          {...register("number")}
          error={errors.number?.message}
        />
        <Input
          placeholder="complement"
          className="complement"
          {...register("complement")}
          error={errors.complement?.message}
          rightText="Opcional"
        />
      </div>
      <div className="row">
        <Input
          placeholder="district"
          {...register("district")}
          error={errors.district?.message}
        />
        <Input
          placeholder="city"
          className="city"
          {...register("city")}
          error={errors.city?.message}
        />
        <Input
          placeholder="UF"
          className="uf"
          {...register("uf")}
          error={errors.uf?.message}
        />
      </div>
    </AddressFormContainer>
  );
}
