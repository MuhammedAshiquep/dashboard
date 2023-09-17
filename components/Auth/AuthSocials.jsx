import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai"
import {FaDiscord} from "react-icons/fa"

export default function AuthSocials() {
  return (
    <div className="flex space-x-[38px] absolute bottom-[67px]">
        <AiFillGithub className="auth-social-logo"/>
        <AiFillTwitterCircle className="auth-social-logo"/>
        <AiFillLinkedin className="auth-social-logo"/>
        <FaDiscord className="auth-social-logo"/>
    </div>
  )
}
