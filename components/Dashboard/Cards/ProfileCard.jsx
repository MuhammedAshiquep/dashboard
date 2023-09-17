import { AiOutlinePlus } from "react-icons/ai";
import { Figtree, Lato } from 'next/font/google'
import SocialCard from "./SocialCard";

import instagram_icon from "../../../public/icons/social/instagram.svg"
import whatsapp_icon from "../../../public/icons/social/whatsapp.svg"
import youtube_icon from "../../../public/icons/social/youtube.svg"
import email_icon from "../../../public/icons/social/email.svg"


const lato = Lato({
    subsets: ['latin'],
    weight: '700',
    display: 'swap'
})

const figtree = Figtree({
    subsets: ['latin'],
    weight: '700',
    display: 'swap'
})

export default function ProfileCard({handleProfileAddClick, isDone, profile}) {

    if(!isDone) {
        return (
            <div className="flex flex-grow flex-col items-center justify-center rounded-2xl space-y-4 h-64 border-2 border-[#E0E0E0] bg-white ">
                <div className="flex justify-center items-center w-20 h-20 rounded-full cursor-pointer bg-[#F5F5F5]" onClick={handleProfileAddClick}>
                    <AiOutlinePlus className="w-14 h-14 tex-center text-[#999CA0]"/>
                </div>
                <p className={`${lato.className} text-[#858585]`}>Add Profile</p>
            </div>
        )
    }

    return (
        <div className="flex flex-grow flex-col justify-center rounded-2xl space-y-[60px] h-64 px-40 py-12 border-2 border-[#E0E0E0] bg-white">
            <p className={`text-[24px]  ${figtree.className}`}>{profile.name}</p>
            <div className="flex space-x-28">
                <div className="flex flex-col space-y-6">
                    <SocialCard text={profile.phone} src={whatsapp_icon.src} color="#E9F9EB"/>
                    <SocialCard text={profile.email} src={email_icon.src} color="#EBE6F9"/>
                </div>
                <div className="flex flex-col space-y-6">
                    { profile.instagram !== "" && <SocialCard text={profile.instagram} src={instagram_icon.src} color="#FFE9EC"/>}
                    { profile.youtube !== "" && <SocialCard text={profile.youtube} src={youtube_icon.src} color="#FFE9E9"/>}
                </div>
            </div>
        </div>
    )
}
