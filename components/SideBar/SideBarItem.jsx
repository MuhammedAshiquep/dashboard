import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap'
})

export default function SideBarItem({icon="", label, active=false}) {
  return (
    <div className="flex space-x-5 items-center cursor-pointer">
        {icon}
        <p className={`${icon ? "text-[18px]" : "text-[14px]"} ${active ? "font-bold" : "font-normal"} ${montserrat.className}`}>{label}</p>
    </div>
  )
}
