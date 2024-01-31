'use client';
import { Input } from "@/components/ui/atoms/input"
import { Button } from "@/components/ui/atoms/button";
import { useEffect, useRef, useState } from "react";

export interface FormRecoverPasswordProps {
  sendButtonCallback?: () => void
}

const FormRecoverPassword = ({ sendButtonCallback }: FormRecoverPasswordProps) => {
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
    <>
      <Input
        ref={inputRef}
        onChange={handleInputChange}
        type="email"
        placeholder="Informe seu email"
        icon="email"
        className="mb-3"
        required
      />
      <Button
        className="w-full"
        disabled={!buttonAvailable}
        variant={buttonAvailable ? "default" : "disabled"}
        onClick={sendButtonCallback}
        size="lg"
      >
        enviar link
      </Button>
    </>
  )
}

export default FormRecoverPassword

