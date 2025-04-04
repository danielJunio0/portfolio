import Experience from "./experience/page";
import Home from "./home/page";

export default function Index() {
  return (
    <main  className="gap-10 mx-[16px]">      
      <Home/>
      <Experience/>    
    </main>
  )
}
