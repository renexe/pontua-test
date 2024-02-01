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
  currentMenu: string
  handleMenuClick: (menu: string) => void
}

const ProfileMenu = ({ currentMenu, handleMenuClick }: ProfileMenuProps) => { 

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
     
    </>
  )
}

export default ProfileMenu