import backgroundimage from "../../../../public/background.png";

const Background = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundimage.src})`,
      backgroundRepeat: 'repeat',
      width: '100%',
      height: '100vh',
      backgroundSize: 161,
      opacity:0.04
    }}/>
  )
}

export default Background;