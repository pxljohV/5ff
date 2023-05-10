import Image from "next/image";
import { useState } from "react";
import style from "../styles/Home.module.css";
import bannerImg from "../Components/assets/banner-logo2.png";
import Link from "next/link";

export default function Characters() {
    const char = [
        {
            name: "Cocoa",
            img: require("./assets/cocoa_icon.png"),
            //full: require('./assets/cocoa_full.png'),
            desc: "Cocoa is a rush down character. He uses his high speed movements to close the gap between him and his adversaries. Lacking projectiles, it's pivotal to use his combo strings to end matches.",
        },
        {
            name: "Pebbles",
            img: require("./assets/pebbles_icon.png"),
            //full: require('./assets/pebbles_full.png'),
            desc: "Mix ups are how Pebbles approaches each battle making his motions are rarely predictable. Once he has his opponent in the air, his power increases making him a terrifying foe.",
        },
        {
            name: "Pomme",
            img: require("./assets/pomme_icon.png"),
            //full: require('./assets/pomme_full.png'),
            desc: "Pomme is regarded as a setup character. Using her resources such as traps and projectiles plus proper timing, she can devastate her foes with her brute strength. If her strength isn't enough, she is able to apply super armor to guts through attacks.",
        },
        {
            name: "StraleChi",
            img: require("./assets/stralechi_icon.png"),
            //full: require('./assets/stralechi_full.png'),
            desc: "StraleChi possesses the all rounder play style. His Hashira sword techniques  allow him to close the distance between him and his opponent. By utilizing his  long startups but quick release sword slashes and tossing water to keep foes where they are.",
        },
        {
            name: "Blaine",
            img: require("./assets/blaine_icon.png"),
            //full: require('./assets/blaine_full.png'),
            desc: "Blaine armed with a polearm, is designated under the archetype of a midrange glass cannon; he is able to keep his opponents at bay while dealing massive amounts of damage. With practice you'll be able to master his rage  and character specific ability to burn foes.",
        },
    ];
    const [charImg, setCharImg] = useState(char[0].full);
    const [charName, setCharName] = useState(char[0].name);
    const [charDesc, setCharDesc] = useState(char[0].desc);

    return (
        <div className="pt7 w-100 flex justify-center items-center flex-wrap  white ">
            <div
                className="tc center w-100 pa2 flex items-center justify-center "
                style={{
                    marginTop: "-150px",
                    zIndex: 0,
                }}
            >
                <Image
                    src={bannerImg}
                    alt="logo 5ff"
                    width={460}
                    className="bannerMedia"
                />
            </div>
            <div
                className="w-100-ns w-100-m w-100 flex items-center flex-wrap pb5"
                style={{ backgroundColor: "#000" }}
            >
                <div className="char-container flex flex-wrap items-center  w-70-ns w-90 center">
                    <div className="tc center bg-black w-100 mt3  ">
                        <h1 className=" f1-ns f2-m f2 center ma0">
                            <span className="orange tc center ">5 </span>FORCE FIGHTERS
                        </h1>
                        <p
                            className="flex justify-center flex-wrap items-center center tc f5 f4-l  ph2-l   br3 pb2 relative w-90-l"
                        
                        >
                            Unravel the story of 5 teens blessed with elemental powers, but
                            cursed with scarred pasts that have led them to a common, but
                            destructive, goal.
                        </p>
                        <div className="w-70-ns center flex flex-wrap items-center justify-center">

                            <div className="center tc grow btnFx  mt0-ns">
                                <Link
                                    href="https://store.steampowered.com/app/1599170/5_Force_Fighters/"
                                    className=" linked center "
                                >
                                    WISHLIST NOW
                                </Link>
                            </div>
                        </div>

                        <div className="bb b--white-20 w-90 center mt5"></div>
                        <p className="f3 orange ma0 pt3 pt4">CHOOSE YOUR</p>
                        <h2 className="pa0 f1-l f1-m f2 ma0 bb w-90 center pb4">FIGHTER</h2>
                    </div>
                    <div className="  tc center ma0"></div>
                    {char.map((icon, index) => {
                        return (
                            <div
                                key={index}
                                className="w-50-ns w-90 tl br2 center bg-black-50 overflow-hidden flex justify-center bg-black pt2"
                            >
                                <div
                                    className="overflow-hidden white f4 flex justify-center flex-wrap bg-black"
                                    style={{ width: "100%", height: "auto" }}
                                >
                                    <div className="overflow-hidden relative mw6 ">
                                        <Image
                                            src={icon.img}
                                            alt="character icons "
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        ></Image>
                                        <div
                                            className="_desc z-0 bottom-0  ma0 absolute  w-100  flex items-end  bg-black-50 "
                                            style={{
                                                transition: "0.4s",
                                                height: "100%",
                                                bot: "-10px",
                                            }}
                                        >
                                            <p className="f5-l f7-m f5  white-90 pa4-ns overflow-hidden pa2 b">
                                                {icon.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-100 tc ">
                                        <p className="z-0 f2 f3-m f2-l pa3 purple5-bg b ma0 mw6 bb b--pink center glow">
                                            {icon.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}