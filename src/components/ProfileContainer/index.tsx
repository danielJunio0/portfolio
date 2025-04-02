import Image from "next/image";
import ProfilePic from "../../../public/profilepic.jpg";

const ProfileContainer = () => {

  return (
    <div className="px-5 py-[30px] bg-[#272829] rounded-2xl">
      <div className="rounded-2xl h-[280px] w-[240px] overflow-hidden">

        <Image src={ProfilePic} objectFit="cover" fill alt="Profile Pic" />
      </div>
      <p>Daniel Junio Barbosa</p>
    </div>
  )
}
export default ProfileContainer;