import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import ProfileModalTab from './ProfileModalTab'

import { Figtree } from 'next/font/google'
import BasicProfile from './BasicProfile'
import ButtonSmall from '@/components/Button/ButtonSmall'
import ContactProfile from './ContactProfile'

const figtree = Figtree({
    subsets: ['latin'],
    weight: '600',
    display: 'swap'
})

export default function ProfileModal({setprofile, setmodalOpen}) {

    const [activeTab, setactiveTab] = useState("Basic")

    return (
        <div className={`flex flex-col w-[34rem] h-fit bg-[#F2F2F2] px-6 pt-4 pb-6 rounded-2xl absolute inset-0 z-50 m-auto ${figtree.className}`}>
            <div className="flex justify-between items-center w-fill">
                <h6 className="text-[20px]">Add New Profile</h6>
                <AiOutlineClose className="w-6 h-6 cursor-pointer text-[#999CA0]" onClick={() => setmodalOpen(false)}/>
            </div>

            <div className="flex w-full justify-between pt-10">
                <ProfileModalTab name="Basic" active={activeTab === "Basic"}/>
                <ProfileModalTab name="Contact" active={activeTab === "Contact"}/>
            </div>

            <div className="w-full pt-6">
                { activeTab === "Basic" ? (
                        <BasicProfile setactiveTab={setactiveTab} setprofile={setprofile}/> 
                    ) : (
                        <ContactProfile setactiveTab={setactiveTab} setprofile={setprofile} setmodalOpen={setmodalOpen}/> 
                    )
                }
            </div>

        </div>
    )
}
