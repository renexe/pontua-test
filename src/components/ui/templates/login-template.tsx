import { Modal, ModalContent, ModalDescription, ModalFooter, ModalTitle } from "@/components/ui/organisms/modal";
import { Typography } from "@/components/ui/atoms/typography";
import FormLogin from "@/components/ui/molecules/form-login";
import Link from "next/link";
import ShieldIcon from "@/components/ui/atoms/icons/shield-icon";

const LoginTemplate = () => {
  return (
    <Modal>
      <ModalTitle>
        Bem-vindo<span className="text-orange-500">.</span>
      </ModalTitle>
      <ModalDescription>
        informe as suas credenciais de acesso ao portal
      </ModalDescription>
      <ModalContent>
        <FormLogin />
      </ModalContent>
      <ModalFooter>
        <Link href="/forgot-password" className="hover:underline underline-offset-2">
          <Typography color="orange" variant="body2" className="w-full flex justify-end gap-1 mt-5">
            <ShieldIcon /> Esqueceu sua senha?
          </Typography>
        </Link>
      </ModalFooter>
    </Modal>
  )
}

export default LoginTemplate