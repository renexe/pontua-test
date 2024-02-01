import Logo from "../atoms/logo";
import DashboardMenuNav from "../molecules/dashboard-menu-nav";

const SideBar = () => {
  

  return (
    <div className="w-[256px] h-screen shadow-xl hidden sm:block">
      <div className="w-full py-5 pl-6 border-b border-gray-50 h-16">
        <Logo imgSrc="/assets/images/logo_pontua_blue.svg" imgWidth={104} imgHeight={26} revealBgColor="bg-white" />
      </div>

      <DashboardMenuNav />

      
    </div>
  )
}

export default SideBar