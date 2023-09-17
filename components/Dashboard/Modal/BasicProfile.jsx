import ButtonSmall from '@/components/Button/ButtonSmall'
import InputY from '@/components/Input/InputY'
import  { useRef } from 'react'

export default function BasicProfile({setactiveTab, setprofile}) {

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()

    function onNextClick(){
        setactiveTab("Contact");
        setprofile((prev)=> ({...prev, name: nameRef.current.value, email: emailRef.current.value, phone: phoneRef.current.value}))
    }   

    return (
        <>
            <div className="flex flex-col space-y-6 justify-center">
                <InputY required={true} label="Enter Name" inputRef={nameRef} placeholder="Eg. John Doe"/>
                <InputY required={true} label="Enter Email" inputRef={emailRef} placeholder="Eg. John@xyz.com"/>
                <InputY required={true} label="Enter Phone" inputRef={phoneRef} placeholder="Eg.  9123456789"/>
            </div>

            <div className="flex justify-end pt-16">
                <ButtonSmall text="Next" onClick={onNextClick}/>
            </div>
        </>
    )
}
