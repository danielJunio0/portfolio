import Image from "next/image";
import ProfilePic from "../../../public/profilepic.jpg";

const ProfileContainer = () => {

  return (
    <div className="bg-[#fff0] items-center flex flex-col flex-nowrap gap-10 h-min justify-center relative lg:sticky top-10 w-min z-1 py-0 px-5">
      <div className="contents">

        <div className="flex-none h-[640px] relative w-[344px] z-1">
          <div className="bg-[#272829] rounded-4xl h-full w-full opacity-100 items-center flex flex-col flex-nowrap gap-8 justify-start overflow-hidden py-7 px-5 relative ">

            <div className="rounded-2xl h-[280px] w-[240px] overflow-hidden">

              <Image src={ProfilePic} objectFit="cover" alt="Profile Pic" className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <p className="font-bold text-4xl text-center gap-2">Daniel Barbosa</p>
              <p>Desenvolvedor Full-Stack</p>
              <p>Ribeirão Preto - SP/Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer;
