import Image from "next/image";
import LoginTemplate from "@/components/ui/templates/login-template";
import RecoverPasswordTemplate from "../templates/recover-password-template";

const OnboardingScreen = () => {
  return (
    <div className="md:container md:mx-auto flex flex-col justify-between pt-4 md:pt-12">
      <Image
        src="/assets/images/logo_pontua_white.svg"
        alt="logomarca da Pontua"
        width={169}
        height={50}
      />

      <div className="flex justify-between items-end md:mt-16 2xl:mt-32">
        <Image
          src="/assets/images/bro.svg"
          alt="imagem vetorizada de um prédio"
          width={614}
          height={467}
          className="absolute bottom-0 left-0 sm:relative z-10"
        />
        <LoginTemplate />
        {/* <RecoverPasswordTemplate /> */}
      </div>
    </div>
  )
}

export default OnboardingScreen