import { Lato } from 'next/font/google'
import { AiOutlineSearch } from 'react-icons/ai'

const lato = Lato({
    subsets: ['latin'],
    weight: '400',
    display: 'swap'
})

export default function Searchbar() {
  return (
    <div className={`flex w-48 h-8 relative flex-col space-y-2 text-black rounded-xl bg-white ${lato.className}`}>
        <input className="outline-none w-48 h-8 bg-white rounded-xl pl-4 py-2" name="search" placeholder="Search..."/>
        <AiOutlineSearch className="absolute my-auto top-0 right-[12px] text-[#858585] h-4 w-4"/>
    </div>
  )
}
