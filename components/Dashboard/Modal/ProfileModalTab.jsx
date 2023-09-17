
export default function ProfileModalTab({active, name}) {
  return (
    <div className={`text-center py-[6px] w-5/12 cursor-default ${active && "border-b-4 border-[#3F84F8]"}`}>
        {name}
    </div>
  )
}
