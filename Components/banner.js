import ReactPlayer from "react-player";
import style from "../styles/Home.module.css";
import bannerImg from "../Components/assets/banner-logo2.png"
import { useState, useEffect } from "react";
import Image from "next/image"

export default function Banner() {
  const [hasVid, setHasVid] = useState(false);

  useEffect(() => {
    if (hasVid === false) {
      console.log("a");
      setHasVid(true);
    }
  }, []);

  return (
    
    <div className={style.bannerBg}>
      
      <div className=" flex flex-wrap  items-center center">
        
        <div className="tc center  w-100 pa5 bg-black mb6" 
        >
        </div>
        <div className="center  flex justify-center w-100 videoMedia">
          {hasVid && (
            <ReactPlayer
              url="https://streamable.com/7as1yq"
              type="video/mp4"
              autoplay={true}
              playing={true}
              loop={true}
              width={1000}
              height={1000}
              muted={true}
              style={{
                position: "absolute",
                zIndex: "-1",
                top: "-130px",
                opacity: "30%",
                border:"solid 4px black",
                
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}