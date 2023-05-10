import logo from "./assets/5ff-letters.svg";
import Image from "next/image";
import rating from "./assets/rating.jpg";

export default function Bottom() {
  return (
    <div className="center tc w-100 bg-black mt4 white">
      <div className=" flex items-center purple5-bg w-70-ns w-90 center ">
        <div className="pv6 w-100">
          <h1 className="f1-ns f4-m f3  "><span className="orange">5 </span>FORCE FIGHTERS</h1>
          <p className="w-100">PS4 PS5 XBOX-SERIES-S|X Steam</p>
          <div className="w-100 flex justify-center flex-wrap">
            <p className="pa2">
              Genre:<br></br> Fightin
            </p>
            <p className="pa2">
              Relase Date: <br></br> TBA
            </p>
            <div className="w-100">
              <Image src={rating} alt="rating" width={100} />
            </div>
            <p>Kaizen Creed Logo ** </p>
          </div>
        </div>
      </div>
      <p className="f6 silver pa2">All rights reserved - 2023</p>
    </div>
  );
}