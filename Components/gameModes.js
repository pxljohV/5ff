import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function GameModes() {
  return (
    <div className="gameModes tc flex justify-center">
      <div className="w-90 w-70-ns w-90-m center white bg-black ba b--white-20 br3">

        <div className=" bg-black  w-90 center ">
          <p className="f3 orange ma0 pt4 ">GAME</p>
          <h2 className="pa0 f1-l f1-m f2 ma0 bb  center pb4-ns pb3">MODES</h2>
        </div>

        <div className="modes w-90-ns f3-l f5 pb4 center pv2 ph4 mt4 br4">
          <h3 className=" white-90 pa3-ns pa2 f3-m f2-ns f3 bb b--black b bg-white-10">Story</h3>
          <h3 className="white-90 pa3-ns pa2 f3-m f2-ns f3 bb b--black b bg-white-10">
            VS - Online & Local
          </h3>
          <h3 className="white-90 pa3-ns pa2 f3-m f2-ns f3 bb b--black b bg-white-10">
            Combo Challenge
          </h3>
          <h3 className="white-90 pa3-ns pa2 f3-m f2-ns f3 bb b--black b bg-white-10">More</h3>
        </div>
      </div>
    </div>
  );
}