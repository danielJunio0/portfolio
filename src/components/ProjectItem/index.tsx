import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface IProjectItem {
  id: number,
  name: string,
  description: string,
  image: StaticImageData,
}

const ProjectItem = ({ item }: { item: IProjectItem }) => {

  return (
    <Link href={"/"} className="group">
      <li className="rounded-2xl overflow-hidden">

        <div className="bg-[#363636] h-[200px] flex justify-center items-center">
          <Image width={140} height={140} alt="project image" src={item.image.src} className="transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="bg-[#272829] p-6 flex flex-col gap-2">
          <h1 className="font-bold text-lg group-hover:text-[#8e81ff] transition-transform duration-300">{item.name}</h1>
          <p className="text-sm">{item.description}</p>
        </div>
      </li>
    </Link>
  )
}

export default ProjectItem;