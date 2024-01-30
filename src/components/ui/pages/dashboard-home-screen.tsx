'use client';
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/atoms/input";
import { Typography } from "@/components/ui/atoms/typography";
import { cn } from "@/lib/utils";
import AmplifyIcon from "@/components/ui/atoms/icons/amplify";
import Image from "next/image";
import Link from "next/link";
import SkeletonGrid from "../organisms/skeleton-grid";


export interface DashboardHomeScreenProps {
  heroes: any[];
}

const DashboardHomeScreen = ({ heroes }: DashboardHomeScreenProps) => {
  const [search, setSearch] = useState("");
  const [currentHeroes, setCurrentHeroes] = useState(heroes);
  const [pages, setPages] = useState<any[][]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const filteredHeroes = heroes.filter((hero) => hero.name.toLowerCase().includes(search.toLowerCase()));
    const pages = [];
    const pageSize = 10;
    for (let i = 0; i < filteredHeroes.length; i += pageSize) {
      const page = filteredHeroes.slice(i, i + pageSize);
      pages.push(page);
    }

    setPages(pages);
  }, [search, heroes]);

  const descriptionFactory = (description: string) => {
    if (description === "") {
      return "Sem descrição";
    }

    if (description.length > 100) {
      return `${description.slice(0, 100)}...`;
    }

    return description;
  }

  const handleSearch = (target: HTMLInputElement) => {
    setSearch(target.value);
  }

  return (
    <>
      <div className="flex w-full h-16 items-center overflow-hidden pl-9 border-b border-gray-50">
        <AmplifyIcon />
        <Input placeholder="Busque um agente" value={search} onChange={(e) => handleSearch(e.target)} className="min-w-[70vw] h-full border-none focus-visible:ring-0" />
      </div>
      {pages.length > 0 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-5 mx-9">
          {pages[currentPage].map((hero: any, index: number) => (
            <div key={hero.id} className={cn(index >= 8 ? "col-span-1 sm:col-span-2" : "col-span-1")}>
              <Link
                href={`/dashboard/perfil/${hero.id}`}
                className="w-full h-[150px] bg-gray-200 rounded-xl flex p-3 gap-4 shadow-md hover:shadow-lg transition-transform hover:border hover:border-gray-400"
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
        : <SkeletonGrid />}
    </>
  );
}

export default DashboardHomeScreen;