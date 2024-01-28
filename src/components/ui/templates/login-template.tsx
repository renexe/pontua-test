import { Modal, ModalContent, ModalDescription, ModalFooter, ModalTitle } from "@/components/ui/organisms/modal";
import { Typography } from "@/components/ui/atoms/typography";
import FormLogin from "@/components/ui/molecules/form-login";
import ShieldIcon from "@/components/ui/atoms/icons/shield-icon";

export interface LoginTemplateProps {
  recoverPasswordCallback: () => void
  successfullLoginCallback: () => void
}

const LoginTemplate = ({ recoverPasswordCallback, successfullLoginCallback }: LoginTemplateProps) => {
  return (
    <Modal>
      <ModalTitle>
        Bem-vindo<span className="text-orange-500">.</span>
      </ModalTitle>
      <ModalDescription>
        informe as suas credenciais de acesso ao portal
      </ModalDescription>
      <ModalContent>
        <FormLogin successfullLoginCallback={successfullLoginCallback} />
      </ModalContent>
      <ModalFooter>
        <Typography
          color="orange"
          variant="body2"
          className="w-full flex justify-end gap-1 mt-5 hover:underline underline-offset-2 cursor-pointer"
          onClick={recoverPasswordCallback}
        >
          <ShieldIcon /> Esqueceu sua senha?
        </Typography>
      </ModalFooter>
    </Modal>
  )
}

export default LoginTemplate