export default function ButtonSmall({text, varient = 'normal', onClick}) {
  return (
    <button className={`text-[14px] bg-[#4285F4] px-4 py-2 rounded-xl text-center
      ${varient === "normal" ? "bg-[#3E84F8] text-white" : "bg-white text-[#231F20] border border-[#999CA0]"}`}
      onClick={onClick}
      >
        {text}
    </button>
  )
}
