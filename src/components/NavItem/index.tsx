
import Link from "next/link";
import Image from "next/image";

export interface INavItem {
  url: string;
  icon: any;
  isActive?: boolean;
  name: string;
}

export default function NavItem({ ...props }: INavItem) {
  return (
    <Link href={props.url} data-aos="zoom-in" className="flex flex-col justify-center mx-2 items-center">
      <li className={` h-8 w-8 hover:bg-[#5746e9] justify-center flex items-center cursor-pointer rounded-sm  ${props.isActive && 'bg-[#5746e9]'}`}>
        <Image width={20} alt="icon" src={props.icon} />
      </li>

      <p className="text-[12px] text-center">{props.name}</p>
    </Link>

  )
}