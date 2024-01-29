'use client'

import { useState } from "react"
import { Typography } from "../atoms/typography"
import { cn } from "@/lib/utils"
import Image from "next/image"

export const HERO_MENU = [
  "Visão Geral",
  "Teams",
  "Powers",
  "Species",
  "Authors",
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
        <Image
          src={hero.thumbnail.path + '.' + hero.thumbnail.extension}
          alt=""
          width={120}
          height={90}
          className="rounded-full max-h-[120px]"
        />
        <div>
          <Typography variant="h3" className="text-blue-600">{hero.name}</Typography>
          <Typography className="text-gray-500 text-sm font-semibold mt-4">{hero.description ? hero.description : 'Descrição não fornecida.'}</Typography>
        </div>
      </div>
    </>
  )
}

export default ProfileMenu