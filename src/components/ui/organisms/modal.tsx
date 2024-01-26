import Link from "next/link"
import { Typography } from "../atoms/typography"
import ShieldIcon from "../atoms/icons/shield-icon"
import FormLogin from "../molecules/form-login"

const Modal = () => {
  return (
    <div className="bg-white w-[380px] rounded flex flex-col px-9 py-12">
      <Typography variant="h1">
        Bem-vindo<span className="text-orange-500">.</span>
      </Typography>
      <Typography color="gray" className="mb-[6px]">
        informe as suas credenciais de acesso ao portal
      </Typography>

      <FormLogin />

      <Link href="/forgot-password" className="hover:underline underline-offset-2">
        <Typography color="orange" variant="body2" className="w-full flex justify-end gap-1 mt-5">
          <ShieldIcon /> Esqueceu sua senha?
        </Typography>
      </Link>
    </div>
  )
}

export default Modal;