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
      
      <div className=" pa0  bg-black" style={{marginTop:"-30px"}}>
        
        <div className="tc center  w-100 pa5 bg-black mb6 " 
        >
        </div>
        <div className="center relative w-100 flex justify-center">
          {hasVid && (
            <ReactPlayer
              url="https://streamable.com/7as1yq"
              type="video/mp4"
              autoplay={true}
              playing={true}
              loop={true}
              width={1200}
              height={1200}
              muted={true}
              
              style={{
                display:"cover",
                position: "absolute",
                zIndex: "-1",
                width:"100%",
                heigth:"auto",
                top: "-200px",
                opacity: "30%",
                border:"solid 4px black",
                overflow: " hidden"
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}