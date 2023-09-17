import { useState } from "react";

import ProfileCard from "@/components/Dashboard/Cards/ProfileCard";
import SmallCard from "@/components/Dashboard/Cards/SmallCard";
import DashboardTitle from "@/components/Dashboard/Title";
import SideBarMain from "@/components/SideBar/SideBarMain";
import Modal from "@/components/Modal/Modal";
import ProfileModal from "@/components/Dashboard/Modal/ProfileModal";

const smallCardDetails = [
  {name: "revenues", value: "$2,129,430", increase: "+2.5%", color: "#7FCD93"},
  {name: "transcations", value: "1,520", increase: "+1.7%", color: "#DEBF85"},
  {name: "likes", value: "9,721", increase: "+1.4%", color: "#ECA4A4"},
  {name: "users", value: "9,721", increase: "+4.2%", color: "#A9B0E5"},
]


export default function DashboardPage() {

  const [modalOpen, setmodalOpen] = useState(false)
  const [profile, setprofile] = useState({name: "", email: "", phone: "", instagram: "", youtube: ""})


  function handleProfileAddClick(){
    setmodalOpen(true)
  }

  return (
    <div className="flex relative w-screen h-screen items-center px-11 py-10">
      <SideBarMain/>

      <div className="flex flex-col space-y-10 h-full w-full pl-[67px] pr-[50px] pt-[31px] pb-[29px]">
        <DashboardTitle/>

        <div className="flex space-x-4 items-center">
          { smallCardDetails.map((item) => 
            <SmallCard key={item.name} name={item.name} value={item.value} increase={item.increase} color={item.color}/>
          )}
        </div>

        <div className="flex justify-between items-center space-x-4">
            <ProfileCard profile={profile} isDone={profile.name !== ""} handleProfileAddClick={handleProfileAddClick}/>
        </div>
      </div>

      { modalOpen &&
        <Modal>
          <ProfileModal setprofile={setprofile} setmodalOpen={setmodalOpen}/>
        </Modal>
      }
    </div>
  )
}
