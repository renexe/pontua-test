import Image from "next/image";

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
        <div className="flex bg-white w-[380px] h-[433px] rounded"></div>
      </div>
    </main>
  );
}
