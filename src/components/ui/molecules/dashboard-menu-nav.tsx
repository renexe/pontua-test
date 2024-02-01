"use client";
import { Typography } from "../atoms/typography"
import ProfileIcon from "../atoms/icons/profile-icon"
import DashboardIcon from "../atoms/icons/dashboard-icon"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import BackArrowIcon from "../atoms/icons/back-arrow-icon";
import { signOut } from "@/lib/actions";

const DashboardMenuNav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between sm:block w-full px-8">
      <div className="w-full py-5 border-b border-gray-50 flex sm:flex-col gap-6">
        <Link href="/dashboard" className="flex gap-4 items-center group">
          <DashboardIcon stroke={pathname === "/dashboard" ? "var(--orange-500)" : "var(--blue-800)"} />
          <Typography
            variant="menu"
            className={cn("group-hover:translate-x-2 transition-transform", pathname === "/dashboard" && "text-orange-500")}
          >
            Home
          </Typography>
        </Link>
        <Link href="/" className="flex gap-4 items-center group">
          <ProfileIcon stroke={pathname.includes("/perfil/") ? "var(--orange-500)" : "var(--blue-800)"} />
          <Typography
            variant="menu"
            className={cn("group-hover:translate-x-2 transition-transform", pathname.includes("/perfil/") && "text-orange-500")}
          >
            Perfil
          </Typography>
        </Link>
      </div>
      <div className="w-full py-5 flex justify-end sm:block">
        <button onClick={async () => { await signOut() }} className="flex gap-4 items-center group">
          <BackArrowIcon stroke="var(--blue-800)" />
          <Typography
            variant="menu"
            className={cn("group-hover:translate-x-2 transition-transform")}
          >
            Sair
          </Typography>
        </button>
      </div>
    </nav>
  );
}

export default DashboardMenuNav