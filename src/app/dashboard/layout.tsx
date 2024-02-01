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
      {children}
    </section>
  )
}