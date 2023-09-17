import { Lato } from 'next/font/google'
import { useRef } from 'react'

import InputX from '@/components/Input/InputX'
import ButtonX from '@/components/Button/ButtonX';


const lato = Lato({
    subsets: ['latin'],
    weight: '400',
    display: 'swap'
})

export default function SiginWithEmail() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className="flex flex-col p-8 space-y-5" >
      <InputX type="email" label="Email address" inputRef={emailRef}/>
      <InputX type="password" label="Password" inputRef={passwordRef}/>

      <p className={`cursor-pointer text-[#346BD4] ${lato.className}`}>Forgot password?</p>

      <ButtonX text="Sign In"/>

      <p className={`text-[#858585] ${lato.className}`}>Don&apos;t have an account? <span className="cursor-pointer text-[#346BD4]">Register here</span></p>
    </div>
  )
}
