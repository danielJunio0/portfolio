import ProjectItem, { IProjectItem } from "@/components/ProjectItem"
import AssaiImg from "../../../public/assai_logo.svg";
import FloresOnlineImg from "../../../public/floresonline_logo.svg";
import EoBichoImg from "../../../public/eobicho_logo.svg";
import FastParty from "../../../public/fastparty_logo.png";

export default function Projects() {
  const projects: IProjectItem[] = [
    {
      id: 1,
      name: 'Meu Assaí',
      description: 'Mobile app - React Native',
      image: AssaiImg
    },
    {
      id: 2,
      name: 'Flores Online',
      description: 'Aplicativo marketplace de flores',
      image: FloresOnlineImg
    }, {
      id: 3,
      name: 'Fast Party',
      description: 'Mobile app - React Native',
      image: FastParty
    },
    {
      id: 4,
      name: 'É o Bicho',
      description: 'Sistema para pet shop',
      image: EoBichoImg
    },
  ]
  return (
    <section data-aos="fade-down">
      <h1 className="text-[48px] font-bold leading-none text-center lg:text-start mb-10">Projetos recentes e {" "}
        <span className="text-[#8e81ff]">
          Conquistas
        </span>
      </h1>
      <div>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] flex-col">
          {projects.map(item => <ProjectItem key={item.id} item={item} />)}
        </ul>
      </div>
    </section>

  )
}