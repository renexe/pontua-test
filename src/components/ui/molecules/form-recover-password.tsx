'use client';
import { Input } from "@/components/ui/atoms/input"
import { Button } from "@/components/ui/atoms/button";
import { useEffect, useRef, useState } from "react";

const FormRecoverPassword = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [buttonAvailable, setButtonAvailable] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setButtonAvailable(value !== "");
  }

  return (
    <form>
      <Input
        ref={inputRef}
        onChange={handleInputChange}
        type="email"
        placeholder="Informe seu email"
        icon="email"
        className="mb-3"
      />
      <Button className="w-full" disabled={!buttonAvailable} variant={buttonAvailable ? "default" : "disabled"}>enviar link</Button>
    </form>
  )
}

export default FormRecoverPassword

