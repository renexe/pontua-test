import SideBar from "@/components/ui/organisms/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <SideBar />
      {children}
    </section>
  )
}