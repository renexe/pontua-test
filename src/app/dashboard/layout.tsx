import Signature from "@/components/ui/atoms/signature"
import MobileMenu from "@/components/ui/organisms/mobile-menu"
import SideBar from "@/components/ui/organisms/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <MobileMenu />
      <SideBar />
      <Signature textColor="text-black" />
      {children}
    </section>
  )
}