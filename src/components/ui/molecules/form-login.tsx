import { FormEventHandler } from "react";
import { Input } from "@/components/ui/atoms/input"
import { Button } from "@/components/ui/atoms/button";
import { signIn } from "@/lib/actions";

export interface FormLoginProps {
  successfullLoginCallback: () => void
}

const FormLogin = ({ successfullLoginCallback }: FormLoginProps) => {

  const handleSubmit = async (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await signIn(formData);

    if (result) {
      successfullLoginCallback();
    } else {
      console.log(result)
    }
  };

  return (
    <form onSubmit={handleSubmit as unknown as FormEventHandler<HTMLFormElement>}>
      <Input
        required
        type="email"
        name="email"
        placeholder="Informe seu email"
        icon="email"
      />
      <Input
        required
        type="password"
        name="password"
        placeholder="Informe sua senha"
        icon="password"
        className="mt-[23px] mb-[11px]"
      />
      <Button className="w-full" type="submit">entrar</Button>
    </form>
  )
}

export default FormLogin

