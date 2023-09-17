import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap'
})

export default function SiginWithProvider({provider, logo}) {
  return (
    <div className="flex justify-center cursor-pointer items-center space-x-3 bg-white px-5 py-3 rounded-lg">
        {logo}
        <p className={`text-[#858585] font-light ${montserrat.className}`}>Sign in with {provider}</p>
    </div>
  )
}
