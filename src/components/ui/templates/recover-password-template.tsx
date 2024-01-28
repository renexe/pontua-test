import { Modal, ModalContent, ModalDescription, ModalTitle } from "@/components/ui/organisms/modal";
import FormRecoverPassword from "../molecules/form-recover-password";

export interface RecoverPasswordTemplateProps {
  recoverPasswordCallback?: () => void
}

const RecoverPasswordTemplate = ({ recoverPasswordCallback }: RecoverPasswordTemplateProps) => {
  return (
    <Modal>
      <ModalTitle className="mb-7">
        Recuperar senha<span className="text-orange-500">.</span>
      </ModalTitle>
      <ModalDescription className="mb-4">
        Informe o e-mail do seu cadastro.
        Nós estaremos realizando o envio de um
        link com as instruções para você redefinir
        a sua senha.
      </ModalDescription>
      <ModalContent>
        <FormRecoverPassword sendButtonCallback={recoverPasswordCallback} />
      </ModalContent>
    </Modal>
  )
}

export default RecoverPasswordTemplate