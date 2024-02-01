import { Typography } from "@/components/ui/atoms/typography";
import ProfileContent from "@/components/ui/organisms/profile-content";

async function getHero({ id }: { id: string }) {
  const res = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=84d1bd4d3a025bf80b0d30ad747f85b8&hash=649c4fe1ca33ed38c47a7e08a732fa8a&limit=100&offset=20`)

  if (!res.ok) {
    throw new Error('Failed to fetch data on the Marvel\'s API')
  }

  return res.json()
}

export default async function AgentProfile({ params }: { params: { id: string } }) {
  const { id } = params
  const { data } = await getHero({ id })
  const hero = data.results[0]

  return (
    <section className="pl-9 mt-16 pt-6 border-t border-gray-50 w-full">
      <Typography variant="h3">
        Perfil
        <span className="text-orange-500"> / </span>
        <span className="text-gray-400 !font-normal">
          {hero.name}
        </span>
      </Typography>
      <ProfileContent hero={hero} />
    </section>
  );
}
