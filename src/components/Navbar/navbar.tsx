
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
    <div className="fixed lg:absolute top-5 lg:top-8 left-1/2 -translate-x-1/2 z-10">
      <nav className="bg-[#272829] rounded-xl flex-row flex pt-2 pr-4 pb-2 navbar">
        {items.map((item, index) => (
          <NavItem key={index} icon={item.icon} url={item.url} isActive={pathname == item.url} />
        ))}
      </nav>
    </div>
  )
}

export default NavBar;
