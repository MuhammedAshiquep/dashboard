import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export default function Modal({ children }){
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
      return () => setMounted(false)
   }, [])

   return mounted
      ? createPortal(children, 
        document.querySelector("#modal"))
      : null
}

