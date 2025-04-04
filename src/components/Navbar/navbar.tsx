
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
      icon: HomeImg
    },
    {
      url: "/projects",
      icon: PathImg
    },
    {
      url: "/tools",
      icon: ToolImg
    }, {
      url: "/experience",
      icon: BagImg
    },
    {
      url: "/contacts",
      icon: LetterImg
    },
  ]

  return ( 
    <div className="fixed top-[20px] flex-none h-auto left-[50%] z-[9] -translate-x-1/2">
      <nav className="bg-[#272829] w-full max-w-full rounded-[12px] opacity-[1] items-center flex flex-row flex-nowrap h-[48px] justify-between px-[20px] relative">
        {items.map((item, index) => (
          <NavItem key={index} icon={item.icon} url={item.url} isActive={pathname == item.url} />
        ))}
      </nav>
    </div>
  )
}

export default NavBar;
