import Image from "next/image";
import OnboardingTemplateController from "../templates/onboarding-template-controller";

async function getHeroes() {
  const res = await fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=84d1bd4d3a025bf80b0d30ad747f85b8&hash=649c4fe1ca33ed38c47a7e08a732fa8a&limit=100')

  if (!res.ok) {
    throw new Error('Failed to fetch data on the Marvel\'s API')
  }
 
  return res.json()
}


const OnboardingScreen = async () => {
  const heroes = await getHeroes();
  
  return (
    <div className="container mx-auto flex flex-col justify-between pt-4 md:pt-[10vh]">
      <Image
        src="/assets/images/logo_pontua_white.svg"
        alt="logomarca da Pontua"
        width={169}
        height={50}
        priority
      />

      <div className="flex justify-between items-end md:mt-[5vh]">
        <Image
          src="/assets/images/bro.svg"
          alt="imagem vetorizada de um prédio"
          width={614}
          height={467}
          priority
          className="absolute bottom-0 left-0 md:relative md:ml-8 lg:ml-12 z-10"
        />

        <OnboardingTemplateController heroes={heroes} />
      </div>
    </div>
  )
}

export default OnboardingScreen