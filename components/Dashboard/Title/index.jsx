import { Montserrat } from 'next/font/google'

import { MdNotificationsNone } from 'react-icons/md'

import Searchbar from "@/components/Input/Searhbar";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight:"700",
  display: 'swap'
})



export default function DashboardTitle() {
  return (
    <div className="flex justify-between"> 
        <h4 className={`text-[24px] ${montserrat.className}`}>Dashboard</h4>
        <div className="flex items-center">
            <Searchbar/>
            <MdNotificationsNone className="cursor-pointer w-6 h-6 ml-4 mr-6"/>
            <div className="cursor-pointer w-7 h-7 bg-black rounded-full"/>
        </div>
    </div>
  )
}
