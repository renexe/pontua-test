import { cn } from "@/lib/utils"
import { Typography } from "../atoms/typography"

export interface ModalProps {
  children: React.ReactNode
  className?: string
}

const Modal = ({ children, className }: ModalProps) => {
  return (
    <div className={cn("bg-white w-full md:w-[23rem] md:min-h-[27rem] rounded flex flex-col px-9 py-12 z-20", className)}>
      {children}
    </div>
  )
}

const ModalTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <Typography variant="h1" className={cn("mb-3", className)}>
      {children}
    </Typography>
  )
}

const ModalDescription = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <Typography color="gray" className={cn("mb-2", className)}>
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