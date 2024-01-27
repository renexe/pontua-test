import { Typography } from "../atoms/typography"

export interface ModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="bg-white w-[380px] rounded flex flex-col px-9 py-12">
      {children}
    </div>
  )
}

const ModalTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="h1">
      {children}
    </Typography>
  )
}

const ModalDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography color="gray" className="mb-[6px]">
      {children}
    </Typography>
  )
}

const ModalContent = ({ children }: { children: React.ReactNode }) => {
  return (<>{children}</>)
}

const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return (<>{children}</>)
}

export { Modal, ModalTitle, ModalDescription, ModalContent, ModalFooter };