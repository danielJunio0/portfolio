import Image from "next/image";
import ProfilePic from "../../../public/profilepic.jpg";
import Button from "../button";

const ProfileContainer = () => {

  return (
    // <div className="bg-[#fff0] opacity-[1] relative w-full items-center flex flex-none flex-col flex-nowrap gap-[40px] h-min justify-center overflow-hidden p-0 z-1">
    //   <div className="contents">

    //     <div className="flex-none h-[640px] relative w-full z-1 ">
    //       <div className="bg-[#272829] rounded-[16px] h-full w-full opacity-100 items-center flex flex-col flex-nowrap gap-8 justify-start overflow-hidden py-7 px-5 relative mx-[16px] w">

    //         <div className="rounded-2xl h-[280px]  w-[240px] overflow-hidden">

    //           <Image src={ProfilePic} objectFit="cover" alt="Profile Pic" className="w-full h-full object-cover" />
    //         </div>
    //         <div className="text-center">
    //           <p className="font-bold text-[28px] text-center gap-2">Daniel Barbosa</p>
    //           <p className="font-[16px]">Desenvolvedor Full-Stack</p>
    //           <p className="font-[16px]">Ribeirão Preto - SP/Brasil</p>
    //         </div>
    //         <Button>
    //           Entre em contato
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" w-full px-[20px] lg:w-fit">
      <div className="bg-[#272829] rounded-[16px] w-full flex flex-col px-[20px] py-[30px] items-center gap-[16px]">
        <div className="rounded-2xl h-[280px]  w-[240px] overflow-hidden">

          <Image src={ProfilePic} objectFit="cover" alt="Profile Pic" className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <p className="font-bold text-[28px] text-center gap-2">Daniel Barbosa</p>
          <p className="font-[16px]">Desenvolvedor Full-Stack</p>
          <p className="font-[16px]">Ribeirão Preto - SP/Brasil</p>
        </div>
        <div className="mt-[46px]">

          <Button>
            Entre em contato
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer;
