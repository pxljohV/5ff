import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function GameModes() {
  return (
    <div className="gameModes tc flex justify-center">
      <div className="w-90 w-70-ns center white bg-black">

        <div className=" bg-black  w-90 center ">
          <p className="f3 orange ma0 pt4">GAME</p>
          <h2 className="pa0 f1-l f1-m f2 ma0 bb b--pink  center pb4">MODES</h2>
        </div>

        <div className="modes w-90-ns f3-l f5 pb4 center ">
          <h3 className=" pink pa4-l pa2 f3-m f3 bb b--black b purple5-bg">Story</h3>
          <h3 className="pink pa4-l pa2 f3-m f3 bb b--black b purple5-bg">
            VS - Online & Local
          </h3>
          <h3 className="pink pa4-l pa2 f3-m f3 bb b--black b purple5-bg">
            Combo Challenge
          </h3>
          <h3 className="pink pa4-l pa2 f3-m f3 bb b--black b purple5-bg">More</h3>
        </div>
      </div>
    </div>
  );
}