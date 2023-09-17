import { Lato, Open_Sans } from 'next/font/google'

import revenues_icon from "../../../public/icons/card/revenues.svg"
import transactions_icon from "../../../public/icons/card/transactions.svg"
import likes_icon from "../../../public/icons/card/likes.svg"
import users_icon from "../../../public/icons/card/users.svg"

const lato = Lato({
    subsets: ['latin'],
    weight: '400',
    display: 'swap'
})

const open_sans = Open_Sans({
    subsets: ['latin'],
    weight: '700',
    display: 'swap'
})

export default function SmallCard({name, value, increase, color}) {

    function geticon(){
        let icon
        switch (name) {
            case "revenues":
                icon = revenues_icon.src
                break;
            case "transcations":
                icon = transactions_icon.src
                break;
            case "likes":
                icon = likes_icon.src
                break;
            case "users":
                icon = users_icon.src
                break;
            default:
                icon = revenues_icon.src
        }
        return icon
    }

    return (
        <div className="h-28 rounded-2xl border-2 border-[#E0E0E0] bg-white 
            flex flex-grow space-y-2 flex-col py-4 pl-6 pr-5">
            <div className={`flex rounded-full justify-center items-center w-8 py-1.5 small-card-icon`}
                style={{backgroundColor: color}}
            >
                <img src={geticon()} alt="small-card-icon" className="w-[18px] h-[18px] text-white"/>
            </div>

            <div className="flex flex-col">
                <p className={`capitalize text-[11px] font-semibold ${lato.className}`}>Total {name}</p>
                <div className="flex justify-between items-center">
                    <p className={`text-[21px] ${open_sans.className}`}>{value}</p>
                    <div className={`flex justify-center items-center rounded-xl h-fit py-1 px-2 bg-[#E9F9EB] text-[10px] font-semibold ${lato.className}`}>
                        <p className="text-[#4AD15F]">{increase}</p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}
