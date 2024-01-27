import Image from "next/image";
import LoginTemplate from "@/components/ui/templates/login-template";
import RecoverPasswordTemplate from "../templates/recover-password-template";
import RecoverPasswordConfirmTemplate from "../templates/recover-password-confirm-template";
import AgentSelectionTemplate from "../templates/agent-selection-template";

const OnboardingScreen = () => {
  return (
    <div className="container mx-auto flex flex-col justify-between pt-4 md:pt-[10vh]">
      <Image
        src="/assets/images/logo_pontua_white.svg"
        alt="logomarca da Pontua"
        width={169}
        height={50}
      />

      <div className="flex justify-between items-end md:mt-[5vh]">
        <Image
          src="/assets/images/bro.svg"
          alt="imagem vetorizada de um prédio"
          width={614}
          height={467}
          className="absolute bottom-0 left-0 md:relative md:ml-8 lg:ml-12  z-10"
        />
        {/* <LoginTemplate /> */}
        {/* <RecoverPasswordTemplate /> */}
        {/* <RecoverPasswordConfirmTemplate /> */}
        <AgentSelectionTemplate />
      </div>
    </div>
  )
}

export default OnboardingScreen