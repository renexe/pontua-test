import AmplifyIcon from "@/components/ui/atoms/icons/amplify";
import { Input } from "@/components/ui/atoms/input";
import { Typography } from "@/components/ui/atoms/typography";
import ProfileMenu from "@/components/ui/molecules/profile-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

async function getHeroes() {
  const res = await fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=84d1bd4d3a025bf80b0d30ad747f85b8&hash=649c4fe1ca33ed38c47a7e08a732fa8a&limit=100')

  if (!res.ok) {
    throw new Error('Failed to fetch data on the Marvel\'s API')
  }

  return res.json()
}

export default async function DashboardHome() {
  const data = await getHeroes();
  const heroes = data.data.results;

  // Separate heroes by pages of 10 items per page
  const pages: any[] = [];
  for (let i = 0; i < heroes.length; i += 10) {
    const page = heroes.slice(i, i + 10);
    pages.push(page);
  }

  console.log(pages);

  const descriptionFactory = (description: string) => {
    if (description === "") {
      return "Sem descrição";
    }

    if (description.length > 100) {
      return `${description.slice(0, 100)}...`;
    }

    return description;
  }

  return (
    <section className="w-full">
      <div className="flex w-full h-16 items-center overflow-hidden pl-9 border-b border-gray-50">
        <AmplifyIcon />
        <Input placeholder="Busque um agente" className="min-w-[70vw] h-full border-none focus-visible:ring-0" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-5 mx-9">
        {pages[0].map((hero: any, index: number) => (
          <div key={hero.id} className={cn(index >= pages[0].length - 2 ? "col-span-1 sm:col-span-2" : "col-span-1")}>
            <Link
              href={`/dashboard/perfil/${hero.id}`}
              className="w-full h-[150px] bg-gray-200 rounded-xl flex p-3 gap-4"
            >
              <div className="relative w-[80px] h-full">
                <Image
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  alt={hero.name}
                  sizes="99vw"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 h-full overflow-hidden">
                <Typography variant="h5">{hero.name}</Typography>
                <Typography className="mt-2">{descriptionFactory(hero.description)}</Typography>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
