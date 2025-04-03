import backgroundimage from "../../../public/background.png";

const Background = () => {
  return (
    <div className="flex-none h-full left-0 pointer-events-none absolute top-0 w-full z-10">

      <div style={{
        backgroundImage: `url(${backgroundimage.src})`,
        backgroundRepeat: 'repeat',
        width: '100%',
        height: '100%',
        backgroundSize: 161,
        opacity: 0.04,
        position: 'absolute',
      }} />
    </div>
  )
}

export default Background;