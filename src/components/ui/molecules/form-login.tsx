import { FormEventHandler, useState } from "react";
import { Input } from "@/components/ui/atoms/input"
import { Button } from "@/components/ui/atoms/button";
import { signIn } from "@/lib/actions";
import CircularIcon from "../atoms/icons/circular";

export interface FormLoginProps {
  successfullLoginCallback: () => void
}

const FormLogin = ({ successfullLoginCallback }: FormLoginProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await signIn(formData);

    if (result) {
      successfullLoginCallback();
    } else {
      console.log(result)
    }
    setLoading(false);
    return;
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
      <Button size="lg" className="w-full" type="submit" disabled={loading}>
        {!loading ? "entrar" : (
          <>
            <CircularIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
            entrando
          </>
        )}
      </Button>
    </form>
  )
}

export default FormLogin

