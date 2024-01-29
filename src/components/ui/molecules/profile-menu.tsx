'use client'

import { useState } from "react"
import { Typography } from "../atoms/typography"
import { cn } from "@/lib/utils"


const heroMenu = [
  "Visão Geral",
  "Teams",
  "Powers",
  "Species",
  "Authors",
]

const ProfileMenu = () => {

  const [currentMenu, setCurrentMenu] = useState(heroMenu[0])

  const handleMenuClick = (menu: string) => {
    setCurrentMenu(menu)
  }
  return (
    <nav>
      <ul className="flex gap-6 mt-6 border-b border-b-gray-50">
        {heroMenu.map((item) => (
          <li
            key={item}
            className={cn("pb-4 cursor-pointer", currentMenu === item && "border-b-2 border-blue-600")}
            onClick={() => handleMenuClick(item)}
          >
            <Typography variant="h6" key={item} className={cn(currentMenu === item ? "text-blue-600" : "text-gray-500")}>
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ProfileMenu