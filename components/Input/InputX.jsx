import { Lato } from 'next/font/google'

const lato = Lato({
    subsets: ['latin'],
    weight: '400',
    display: 'swap'
})

export default function InputX({inputRef, label, type="text"}) {
  return (
    <div className={`flex flex-col space-y-2 text-black  ${lato.className}`}>
        <label htmlFor={label}>{label}</label>
        <input className="outline-none w-[356px] h-11 bg-[#F5F5F5] rounded-xl pl-4 py-2" type={type} name={label} ref={inputRef} placeholder={label}/>
    </div>
  )
}
