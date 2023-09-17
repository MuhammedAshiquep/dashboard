import ButtonSmall from '@/components/Button/ButtonSmall'
import InputY from '@/components/Input/InputY'
import  { useRef } from 'react'

export default function ContactProfile({setactiveTab, setprofile, setmodalOpen}) {

    const instagramRef = useRef()
    const youtubeRef = useRef()

    function onDoneClick(){
        setmodalOpen(false)
        setprofile((prev)=> ({...prev, instagram: instagramRef.current.value, youtube: youtubeRef.current.value}))
    } 

    return (
        <>
            <div className="flex flex-col space-y-6 justify-center">
                <InputY required={true} label="Instagram Link" inputRef={instagramRef} placeholder="Eg. ..instagram.com/username"/>
                <InputY required={true} label="Youtube Link" inputRef={youtubeRef} placeholder="Eg. ..youtebe/username"/>
            </div>

            <div className="flex justify-end pt-16">
                <div className="flex space-x-2 items-center">
                    <ButtonSmall text="Back" varient="outline" onClick={()=> setactiveTab("Basic")}/>
                    <ButtonSmall text="Done" onClick={onDoneClick}/>
                </div>
            </div>
       </> 
    )
}
