'use client'

import { useState } from "react"
import { Typography } from "../atoms/typography"
import { cn } from "@/lib/utils"
import Image from "next/image"

export const HERO_MENU = [
  "Visão Geral",
  "Comics",
  "Series",
  "Stories",
]

export interface ProfileMenuProps {
  hero: any
}

const ProfileMenu = ({ hero }: ProfileMenuProps) => {

  const [currentMenu, setCurrentMenu] = useState(HERO_MENU[0])

  const handleMenuClick = (menu: string) => {
    setCurrentMenu(menu)
  }

  console.log(hero)

  const splitChunks = (array: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  const Panels = () => {
    switch (currentMenu) {
      case "Visão Geral":
        return (
          <>
            <div className="relative h-[90px] w-[90px] md:h-[120px] md:w-[120px] rounded-full overflow-hidden">
              <Image
                src={hero.thumbnail.path + '.' + hero.thumbnail.extension}
                alt=""
                fill
                sizes="99vw"
                className="cover-image"
              />
            </div>
            <div className="flex-1">
              <Typography variant="h3" className="text-blue-600">{hero.name}</Typography>
              <Typography className="text-gray-500 text-sm font-semibold mt-4">{hero.description ? hero.description : 'Descrição não fornecida.'}</Typography>
            </div>
          </>
        )
      case "Comics":
        const splitedComics = splitChunks(hero.comics.items, 10)

        return (
          <div className="flex flex-wrap md:gap-12">
            {splitedComics.map((chunk, index) => (
              <ul key={index} className="list-disc max-h-[80%] mr-4">
                {chunk.map((comic: any) => (
                  <li key={comic.name}>
                    <Typography className="text-sm font-semibold text-gray-500">{comic.name}</Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        )
      case "Series":
        const splitedSeries = splitChunks(hero.series.items, 10)
        
        return (
          <div className="flex flex-wrap md:gap-12">
            {splitedSeries.map((chunk, index) => (
              <ul key={index} className="list-disc max-h-[80%] mr-4">
                {chunk.map((serie: any) => (
                  <li key={serie.name}>
                    <Typography className="text-sm font-semibold text-gray-500">{serie.name}</Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        )
      case "Stories":
        const splitedStories = splitChunks(hero.stories.items, 10)

        return (
          <div className="flex flex-wrap md:gap-12">
            {splitedStories.map((chunk, index) => (
              <ul key={index} className="list-disc max-h-[80%] mr-4">
                {chunk.map((story: any) => (
                  <li key={story.name}>
                    <Typography className="text-sm font-semibold text-gray-500">{story.name}</Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <nav>
        <ul className="flex gap-6 mt-6 border-b border-b-gray-50">
          {HERO_MENU.map((item) => (
            <li
              key={item}
              className={cn("pb-4 cursor-pointer", currentMenu === item && "border-b-2 border-blue-600")}
              onClick={() => handleMenuClick(item)}
            >
              <Typography variant="h6" key={item} className={cn("px-1", currentMenu === item ? "text-blue-600" : "text-gray-500")}>
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-7 rounded-2xl py-10 px-8 mr-14 shadow-lg flex gap-7">
        <Panels />
      </div>
    </>
  )
}

export default ProfileMenu