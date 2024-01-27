import { Input } from "@/components/ui/atoms/input"
import { Button } from "@/components/ui/atoms/button";
import LoginAltIcon from "../atoms/icons/login-alt-icon";

const FormLogin = () => {
  const ButtonIcon = () => (<LoginAltIcon className="group-hover:translate-x-2 transition-transform duration-300" />);
  return (
    <form>
      <Input type="email" placeholder="Informe seu email" icon="email" />
      <Input type="password" placeholder="Informe sua senha" icon="password" className="mt-6 mb-3" />
      <Button className="w-full" icon={<ButtonIcon />} >entrar</Button>
    </form>
  )
}

export default FormLogin

