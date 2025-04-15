
export interface IExperience {
  id: number,
  title: string,
  company: string,
  timeExp: string,
  description: string,
}

const ExperienceCard = ({ item }: { item: IExperience }) => {
  return (
    <div className="bg-[#272829] rounded-[16px] w-full flex flex-col p-4 gap-1 mt-[16px]">
      <h1 className="text-[20px] font-bold text-[#d9d9d9]">{item.title}</h1>
      <p><span className="text-[14px] text-[#d9d9d9]">{item.company}</span></p>
      <p className="text-[#d9d9d9] mt-3">
        {item.description}
      </p>
      <p className="text-[14px] text-[#d9d9d9] mt-3">{item.timeExp}</p>
    </div>
  )
}

export default ExperienceCard;