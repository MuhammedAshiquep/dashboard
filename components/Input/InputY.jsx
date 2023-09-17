import { Figtree } from 'next/font/google'

const figtree = Figtree({
    subsets: ['latin'],
    weight: '400',
    display: 'swap'
})

export default function InputY({inputRef, label, type="text", placeholder, required}) {
  return (
    <div className={`flex flex-col space-y-2 text-black w-full  ${figtree.className}`}>
        <label htmlFor={label}>{label}{required ? "*" : "(Optional)"}</label>
        <input className="outline-none w-full h-11 bg-white border border-[#F2F2F2] rounded-lg pl-4 py-2" type={type} name={label} ref={inputRef} placeholder={placeholder}/>
    </div>
  )
}
