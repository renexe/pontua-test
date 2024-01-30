import AmplifyIcon from "@/components/ui/atoms/icons/amplify";
import { Input } from "@/components/ui/atoms/input";
import { Typography } from "@/components/ui/atoms/typography";
import ProfileMenu from "@/components/ui/molecules/profile-menu";

async function getHeroes() {
  const res = await fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=84d1bd4d3a025bf80b0d30ad747f85b8&hash=649c4fe1ca33ed38c47a7e08a732fa8a&limit=100')

  if (!res.ok) {
    throw new Error('Failed to fetch data on the Marvel\'s API')
  }

  return res.json()
}

export default async function DashboardHome({ params }: { params: { id: string } }) {
  const heroes = await getHeroes();

  console.log(heroes);

  return (
    <section className="w-full">
      <div className="flex w-full h-14 items-center overflow-hidden pl-9 border-b border-gray-50">
        <AmplifyIcon />
        <Input placeholder="Busque um agente" className="min-w-[70vw] h-full border-none focus-visible:ring-0" />
      </div>
    </section>
  );
}
