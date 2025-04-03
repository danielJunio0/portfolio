import Image from "next/image";
import ProfilePic from "../../../public/profilepic.jpg";

const ProfileContainer = () => {

  return (
    <div className="px-5 py-[30px] bg-[#272829] rounded-2xl items-center flex flex-col gap-6 h-fit w-fit mb-8">
      <div className="rounded-2xl h-[280px] w-[240px] overflow-hidden">

        <Image src={ProfilePic} objectFit="cover" alt="Profile Pic" className="w-full h-full object-cover" />
      </div>
      <div className="text-center">
        <p className="font-bold text-4xl text-center gap-2">Daniel Barbosa</p>
        <p>Desenvolvedor Full-Stack</p>
        <p>Ribeirão Preto - SP/Brasil</p>
      </div>
    </div>
  )
}

export default ProfileContainer;
