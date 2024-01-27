import { Modal, ModalContent, ModalDescription, ModalFooter, ModalTitle } from "@/components/ui/organisms/modal";
import { Typography } from "@/components/ui/atoms/typography";
import Link from "next/link";
import ShieldIcon from "@/components/ui/atoms/icons/shield-icon";
import FormRecoverPassword from "../molecules/form-recover-password";

const RecoverPasswordTemplate = () => {
  return (
    <Modal>
      <ModalTitle>
        Recuperar senha<span className="text-orange-500">.</span>
      </ModalTitle>
      <ModalDescription>
        Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.
      </ModalDescription>
      <ModalContent>
        <FormRecoverPassword />
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

export default RecoverPasswordTemplate