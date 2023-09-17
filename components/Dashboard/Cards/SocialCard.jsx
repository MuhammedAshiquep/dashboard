
export default function SocialCard({text, src, color}) {
  return (
    <div className="flex items-center space-x-2">
        <div className="h-7 w-7 rounded-full flex justify-center items-center" style={{backgroundColor: color}}>
            <img src={src} alt="social logo" className="w-[18px] h-[18px]"/>
        </div>
        <p className="underline text-[14px]">{text}</p>
    </div>
  )
}
