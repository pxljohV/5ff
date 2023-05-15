import logo from "./assets/5ff-letters.svg";
import Image from "next/image";
import rating from "./assets/rating.jpg";
import kaizen from "./assets/kaizen_creed.jpg"
export default function Bottom() {
  return (
    <div className="center tc w-100 bg-black mt4 white">
      <div className=" flex items-center purple5-bg w-70-ns w-90 center ">
        <div className="pv6-ns pv4 w-100">
          <h1 className="f1-ns f2 "><span className="orange">5 </span>FORCE FIGHTERS</h1>
          <p className="w-100 ma0 f4">
            PS4 <span className="white-30"> | </span>
            PS5 <span className="white-30"> | </span>
            XBOX-SERIES S|X <span className="white-30"> | </span>
            Steam</p>
          <div className="w-100 mw6 center flex justify-center flex-wrap">
            <p className="pa2  ">
              Genre: Fighting
            </p>
            <p className="pa2 ">
              Relase Date: TBA
            </p>
            <div className="w-100 ma0 flex justify-center items-center flex-wrap">
    
              <Image src={rating} alt="rating" width={100}  />
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 center tc mt4 pb2">
            <div className="ma0 pa0">
            <Image src={kaizen} alt="rating" width={50} />
              <p className="ma0 f6 white-70">Kaizen Creed</p>
            </div>

              <div className="ma0 pa0">
              <p className="f6 pa2 white ma0">All rights reserved - 2023</p>
              </div>
              
            </div>
   
    </div>
  );
}