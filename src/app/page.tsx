import Image from "next/image";
import { Modal, ModalContent, ModalDescription, ModalFooter, ModalTitle } from "@/components/ui/organisms/modal";
import { Typography } from "@/components/ui/atoms/typography";
import FormLogin from "@/components/ui/molecules/form-login";
import Link from "next/link";
import ShieldIcon from "@/components/ui/atoms/icons/shield-icon";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col justify-between p-2 bg-blue-800 pt-[49px] pb-[160px] px-[108px]">

      <Image
        src="/assets/images/logo_pontua_white.svg"
        alt="bro"
        width={169}
        height={50}
      />

      <div className="flex justify-between items-end">
        <div className="w-[614px] h-[467px] ml-[79px] relative">
          <Image
            src="/assets/images/bro.svg"
            alt="bro"
            fill
            priority
            sizes="100vw"
            className=""
          />
        </div>
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
    </main>
  );
}
