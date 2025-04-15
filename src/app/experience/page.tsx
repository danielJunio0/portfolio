import ExperienceCard from "@/components/ExperienceCard"
import { experiences } from "./experiencesMock"

export default function Experience() {

  return (
    <section>
      {/* <h1 className="text-[48px] font-bold leading-none text-center lg:text-start mb-10">Transformando idéias em {" "}
        <span className="text-[#8e81ff]">
          Realidade
        </span>
      </h1> */}
      <h1 className="text-[48px] font-bold leading-none text-center lg:text-start mb-10">Mais de 5 anos de {" "}
        <span className="text-[#8e81ff]">
          Experiência
        </span>
      </h1>
      <div>
        {experiences.map(item => <ExperienceCard key={item.id} item={item} />)}
      </div>
      <div>


        <div className="text-[#d9d9d9]">
          <p className="text-center lg:text-start mt-4">
            Apaixonado por criar soluções intuitivas e performaticas que melhoram a experiência do usuário.

            Especializado em transformar ideias em projetos reais
          </p>

        </div>
        <div className="flex flex-row gap-4 mt-4">
          <div >
            <p className="font-bold text-5xl"> +5</p>
            <p className="uppercase text-[#d9d9d9]">Anos de</p>
            <p className="uppercase text-[#d9d9d9]">experiência</p>
          </div>
          <div>
            <p className="font-bold text-5xl"> +20</p>
            <p className="uppercase text-[#d9d9d9]">Projetos</p>
            <p className="uppercase text-[#d9d9d9]">Contribuidos</p>
          </div>
          <div>
            <p className="font-bold text-5xl"> +3M</p>
            <p className="uppercase text-[#d9d9d9]">usuários</p>
            <p className="uppercase text-[#d9d9d9]">atingidos</p>
          </div>
        </div>
      </div>
    </section>
  )
}