import { Modal, ModalContent, ModalDescription, ModalTitle } from "@/components/ui/organisms/modal";
import { Button } from "../atoms/button";

const RecoverPasswordConfirmTemplate = () => {
  return (
    <Modal>
      <ModalTitle className="mb-7">
        Tudo certo<span className="text-orange-500"> ;)</span>
      </ModalTitle>
      <ModalDescription className="mb-4">
        Foi enviado um e-mail para você com instruções de como redefinir a sua senha.
      </ModalDescription>
      <ModalContent>
        <Button className="w-full">voltar para o login</Button>
      </ModalContent>
    </Modal>
  )
}

export default RecoverPasswordConfirmTemplate