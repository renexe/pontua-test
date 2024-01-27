import { Modal, ModalContent, ModalDescription, ModalFooter, ModalTitle } from "@/components/ui/organisms/modal";
import Image from "next/image";
import { Typography } from "@/components/ui/atoms/typography";
import FormLogin from "@/components/ui/molecules/form-login";
import Link from "next/link";
import ShieldIcon from "@/components/ui/atoms/icons/shield-icon";

export default function Home() {

  return (
    <main className="min-h-screen bg-blue-800">
      <div className="md:container md:mx-auto flex flex-col justify-between pt-4 md:pt-12">
        <Image
          src="/assets/images/logo_pontua_white.svg"
          alt="logo"
          width={169}
          height={50}
        />

        <div className="flex justify-between items-end md:mt-16">
          <Image
            src="/assets/images/bro.svg"
            alt="imagem urbana"
            width={614}
            height={467}
            className="absolute bottom-0 left-0 sm:relative z-10"
          />
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
        </div>
      </div>
    </main>
  );
}
