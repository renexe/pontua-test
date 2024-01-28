export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-white">
       {children}
    </section>
  )
}