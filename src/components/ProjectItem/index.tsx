import Image, { StaticImageData } from "next/image";

import ProfilePic from "../../../public/profilepic.jpg";
export interface IProjectItem {
  id: number,
  name: string,
  description: string,
  image: StaticImageData,
}
const ProjectItem = ({ item }: { item: IProjectItem }) => {
  return (
    <li className="rounded-2xl overflow-hidden">

      <div className="bg-[#363636] h-[200px] flex justify-center items-center">
        <Image width={200} height={200} alt="project image" src={item.image.src} />
      </div>
      <div className="bg-[#272829] p-6 flex flex-col gap-2">
        <h1 className="font-bold text-lg">{item.name}</h1>
        <p className="text-sm">{item.description}</p>
      </div>
    </li>
  )
}

export default ProjectItem;