import { Montserrat, Lato } from 'next/font/google'

import {FcGoogle} from 'react-icons/fc'
import {FaApple} from 'react-icons/fa'

import SiginWithProvider from './SiginWithProvider'
import SiginWithEmail from './SiginWithEmail'

const lato = Lato({
    subsets: ['latin'],
    weight: '400',
    display: 'swap'
})

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap'
})

export default function SigninSection() {
  return (
    <div className="flex flex-col space-y-7">
      <div className={`flex flex-col`}>
        <h2 className={`font-bold text-[36px]  ${montserrat.className}`}>Sign In</h2>
        <p className={`text-[16px] ${lato.className}`}>Sign in to your account</p>
      </div>

      <div className="flex space-x-2">
        <SiginWithProvider provider="Google" logo={<FcGoogle className="w-4 h-4"/>} />
        <SiginWithProvider provider="Google" logo={<FaApple className="w-4 h-4 text-[#555555]"/>} />
      </div> 

      <SiginWithEmail/>

    </div>
  )
}
