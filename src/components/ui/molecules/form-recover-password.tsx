import { Input } from "@/components/ui/atoms/input"
import { Button } from "@/components/ui/atoms/button";

const FormRecoverPassword = () => {
  return (
    <form>
      <Input type="email" placeholder="Informe seu email" icon="email" className="mb-3" />
      <Button className="w-full">enviar link</Button>
    </form>
  )
}

export default FormRecoverPassword

