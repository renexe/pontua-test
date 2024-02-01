import DashboardMenuNav from "../molecules/dashboard-menu-nav"

const MobileMenu = () => {
  return (
    <div className="bg-gray-100 w-full h-16 fixed top-0 left-0 sm:hidden z-50 shadow">
      <DashboardMenuNav />
    </div>
  )
}

export default MobileMenu