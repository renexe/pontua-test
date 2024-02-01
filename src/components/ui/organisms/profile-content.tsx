'use client'

import { useState } from "react"
import { Typography } from "../atoms/typography"
import ProfileMenu, { HERO_MENU } from "../molecules/profile-menu";
import Image from "next/image"
import { ProfileContentPanel, ProfileContentPanelList } from "../molecules/profile-content-panel";

export interface ProfileContentProps {
  hero: any
}

const ProfileContent = ({ hero }: ProfileContentProps) => {
  const [currentMenu, setCurrentMenu] = useState(HERO_MENU[0])

  const handleMenuClick = (menu: string) => {
    setCurrentMenu(menu)
  }

  const determinePanelListContent = () => {
    switch (currentMenu) {
      case "Comics":
        return hero.comics.items
      case "Series":
        return hero.series.items
      case "Stories":
        return hero.stories.items
      default:
        return []
    }
  }

  return (
    <>
      <ProfileMenu currentMenu={currentMenu} handleMenuClick={handleMenuClick} />
      <ProfileContentPanel>
        {currentMenu === "Visão Geral" ? (
          <>
            <div className="relative h-[90px] w-[90px] md:h-[120px] md:w-[120px] rounded-full overflow-hidden">
              <Image
                src={hero.thumbnail.path + '.' + hero.thumbnail.extension}
                alt=""
                fill
                sizes="99vw"
                priority
                className="cover-image"
              />
            </div>
            <div className="flex-1">
              <Typography variant="h3" className="text-blue-600">{hero.name}</Typography>
              <Typography className="text-gray-500 text-sm font-semibold mt-4">{hero.description ? hero.description : 'Descrição não encontrada.'}</Typography>
            </div>
          </>
        ) : <ProfileContentPanelList data={determinePanelListContent()} />}
      </ProfileContentPanel>
    </>
  );
}

export default ProfileContent;