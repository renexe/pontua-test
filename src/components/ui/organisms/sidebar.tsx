'use client';
import Image from "next/image"
import { Typography } from "../atoms/typography"
import ProfileIcon from "../atoms/icons/profile-icon"
import DashboardIcon from "../atoms/icons/dashboard-icon"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import BackArrowIcon from "../atoms/icons/back-arrow-icon";
import { Button } from "../atoms/button";
import { signOut } from "@/lib/actions";

const SideBar = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="w-[256px] h-screen shadow-xl">
      <div className="w-full py-5 pl-6 border-b border-gray-50">
        <Image
          src="/assets/images/logo_pontua_blue.svg"
          alt="logomarca da Pontua"
          width={169}
          height={50}
          priority
        />
      </div>

      <div className="w-full py-5 pl-6 border-b border-gray-50 flex flex-col gap-6">
        <Link href="/dashboard" className="flex gap-4 items-center group">
          <DashboardIcon stroke={pathname === "/dashboard" ? "var(--orange-500)" : "var(--blue-800)"} />
          <Typography
            variant="menu"
            className={cn("group-hover:translate-x-2 transition-transform", pathname === "/dashboard" && "text-orange-500")}
          >
            Home
          </Typography>
        </Link>
        <Link href="/dashboard/perfil/slug" className="flex gap-4 items-center group">
          <ProfileIcon stroke={pathname === "/dashboard/perfil/slug" ? "var(--orange-500)" : "var(--blue-800)"} />
          <Typography
            variant="menu"
            className={cn("group-hover:translate-x-2 transition-transform", pathname === "/dashboard/perfil/slug" && "text-orange-500")}
          >
            Perfil
          </Typography>
        </Link>
      </div>

      <div className="w-full py-5 pl-6">
        <button onClick={async () => {await signOut()}} className="flex gap-4 items-center group">
          <BackArrowIcon stroke="var(--blue-800)" />
          <Typography
            variant="menu"
            className={cn("group-hover:translate-x-2 transition-transform")}
          >
            Sair
          </Typography>
        </button>
      </div>
    </div>
  )
}

export default SideBar