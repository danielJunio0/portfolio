
"use client"

import HomeImg from "../../../public/icons/home.svg";
import PathImg from "../../../public/icons/path.svg";
import ToolImg from "../../../public/icons/tool.svg";
import BagImg from "../../../public/icons/bag.svg";
import LetterImg from "../../../public/icons/letter.svg";
import NavItem, { INavItem } from "../NavItem";
import { usePathname } from "next/navigation";
// import { useState } from "react";

const NavBar = () => {

  const pathname = usePathname();

  // const [openMenu, setOpenMenu] = useState<boolean>(false);
  const items: INavItem[] = [
    {
      url: "/",
      icon: HomeImg,
      name:"Início"
    },
    {
      url: "/projects",
      icon: PathImg,
      name:"Projetos"
    },
    {
      url: "/tools",
      icon: ToolImg,
      name:"Techs"
    }, {
      url: "/experience",
      icon: BagImg,
      name:"Experiência"
    },
    {
      url: "/contacts",
      icon: LetterImg,
      name:"Contato"
    },
  ]

  return ( 
    <div className="fixed top-[20px] h-auto left-[50%] z-[9] -translate-x-1/2">
      <nav className="bg-[#272829] w-full max-w-full rounded-[12px] opacity-[1] items-center flex flex-row flex-nowrap h-[64px] justify-between px-[20px] relative">
        {items.map((item, index) => (
          <NavItem key={index} icon={item.icon} url={item.url} isActive={pathname == item.url} name={item.name}/>
        ))}
      </nav>
    </div>
  )
}

export default NavBar;
