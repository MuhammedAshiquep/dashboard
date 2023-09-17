import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap'
})
export default function ButtonX({text}) {
  return (
    <button className={`text-white font-semibold bg-[#4285F4] w-[356px] h-11 rounded-xl ${montserrat.className}`}>
        {text}
    </button>
  )
}
