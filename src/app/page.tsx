import { Typography } from "@/components/ui/typography";
import { Input } from "@/components/ui/input"
import Image from "next/image";
import EmailIcon from "@/components/ui/icons/email-icon";
import { Button } from "@/components/ui/button";

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
        <div className="bg-white w-[380px] h-[433px] rounded flex flex-col px-9 py-12">
          <Typography variant="h1">
            Bem-vindo<span className="text-orange-500">.</span>
          </Typography>
          <Typography color="gray" className="mb-[6px]">
            informe as suas credenciais de acesso ao portal
          </Typography>
          <form>
            <Input type="email" placeholder="Informe sua email" icon="email" />
            <Input type="password" placeholder="Informe sua senha" icon="password" className="mt-[23px] mb-[11px]" />
            <Button className="w-full">entrar</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
