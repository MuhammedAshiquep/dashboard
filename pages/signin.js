import { Montserrat } from 'next/font/google'

import AuthSocials from "@/components/Auth/AuthSocials"
import SigninSection from "@/components/Auth/SigninSection"

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap'
})

export default function SigninPage() {

  return (
    <div className="flex relative justify-center w-screen h-screen items-center">
      <div className="absolute top-0 w-full h-40 ">
        <p className="text-[24px] font-bold pt-[60px] pl-[73px] text-white">LOGO</p>
      </div>

      <div className="text-white bg-gradient-to-r from-[#4285F4] to-[#286DE0] w-full h-full flex flex-col justify-center items-center">
        <h1 className={`text-[72px] font-semibold ${montserrat.className}`}>Board.</h1>
        <AuthSocials/>
      </div>

      <div className="w-full h-full flex pl-24 items-center">
        <SigninSection/>
      </div>
    </div>
  )
}
