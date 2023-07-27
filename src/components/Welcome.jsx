import "../assets/css/welcome.css"
import { useEffect,useState } from "react"

const Welcome = () => {
  const [displayText,setDisplayText] = useState("")
  const texts = ["Hi!","Welcome", "to", "my","personal","website."]

  useEffect(()=>{
    let index = 0;
    let interval = 200;
    setInterval(()=>{
    interval = 100;
      if(index < texts.length) setDisplayText(texts[index++])
    },interval)
  },[])
  return (
    <div className="welcome-page">
        <div className="welcome-bg-text border">Software</div>
        <div className="welcome-bg-text bottom">Developer</div>
        <div className="welcome-page-text">
           {
            displayText
           }
        </div>
    </div>
  )
}

export default Welcome