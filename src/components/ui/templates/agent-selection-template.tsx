'use client'
import { Modal, ModalContent, ModalDescription, ModalTitle } from "@/components/ui/organisms/modal";
import FormAgentSelection from "../molecules/form-agent-selection";

const AgentSelectionTemplate = ({heroes}: {heroes: any}) => {

  return (
    <Modal>
      <ModalTitle className="mb-7">
        Selecione o seu agente mais legal<span className="text-orange-500">.</span>
      </ModalTitle>
      <ModalDescription className="mb-4">
        Tenha a visão completa do seu agente.
      </ModalDescription>
      <ModalContent>
        <FormAgentSelection data={heroes} />
      </ModalContent>
    </Modal>
  )
}

export default AgentSelectionTemplate