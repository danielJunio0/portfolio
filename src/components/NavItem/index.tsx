
import Link from "next/link";
import Image from "next/image";

export interface INavItem {
  url: string;
  icon: any;
  isActive?: boolean;
}

export default function NavItem({ ...props }: INavItem) {
  return (
    <Link href={props.url} >
      <li className={`h-8 w-8 hover:bg-[#914bf1] justify-center flex items-center cursor-pointer rounded-sm ml-4 ${props.isActive && 'bg-[#914bf1]'}`}>
        <Image width={20} alt="icon" src={props.icon} />
      </li>
    </Link>

  )
}