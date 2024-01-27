import { Input } from "@/components/ui/atoms/input"
import { Button } from "@/components/ui/atoms/button";

const FormLogin = () => {
  return (
    <form>
      <Input type="email" placeholder="Informe sua email" icon="email" />
      <Input type="password" placeholder="Informe sua senha" icon="password" className="mt-6 mb-3" />
      <Button className="w-full">entrar</Button>
    </form>
  )
}

export default FormLogin

