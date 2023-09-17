import { Montserrat } from 'next/font/google'
import SideBarItem from './SideBarItem'

import dashbaord_icon from "../../public/icons/sidebar/dashboard_icon.svg"
import transaction_icon from "../../public/icons/sidebar/transaction_icon.svg"
import schedule_icon from "../../public/icons/sidebar/schedule_icon.svg"
import user_icon from "../../public/icons/sidebar/user_icon.svg"
import setting_icon from "../../public/icons/sidebar/setting_icon.svg"

const montserrat = Montserrat({
    subsets: ['latin'],
    weight:"700",
    display: 'swap'
})


const navigations = [
    {label: "Dashboard", icon: <img src={dashbaord_icon.src} alt="side-bar-icon" className="w-[18px] h-[18px]"/>, active: true},
    {label: "Transactions", icon: <img src={transaction_icon.src} alt="side-bar-icon" className="w-[18px] h-[18px]"/>, active: false},
    {label: "Schedules", icon: <img src={schedule_icon.src} alt="side-bar-icon" className="w-[18px] h-[18px]"/>, active: false},
    {label: "Users", icon: <img src={user_icon.src} alt="side-bar-icon" className="w-[18px] h-[18px]"/>, active: false},
    {label: "Settings", icon: <img src={setting_icon.src} alt="side-bar-icon" className="w-[18px] h-[18px]"/>, active: false}
]

export default function SideBarMain() {
  return (
    <div className="flex flex-col justify-between text-white bg-gradient-to-r from-[#4285F4] to-[#286DE0]
        h-full rounded-2xl pl-[50px] pr-[84px] py-[60px]">
        
        <div className="flex flex-col space-y-[60px]">
            <h3 className={`text-[36px] ${montserrat.className}`}>Board.</h3>
            <div className="flex flex-col space-y-10">
                { navigations.map((item) => 
                    <SideBarItem key={item.label} label={item.label} icon={item.icon} active={item.active}/>
                )}
            </div>
        </div>

        <div className="flex flex-col space-y-5">
            <SideBarItem label="Help" />
            <SideBarItem label="Contact Us" />
        </div>

    </div>
  )
}
