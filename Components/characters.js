import Image from 'next/image'
import { useState } from 'react';

export default function Characters() {

    const char = [
        {
            name: "Cocoa",
            img: require('./assets/cocoa_icon.png'),
            full: require('./assets/cocoa_full.png'),
            desc: "Cocoa is a rush down character. He uses his high speed movements to close the gap between him and his adversaries. Lacking projectiles, it's pivotal to use his combo strings to end matches."
        },
        {
            name: "Pebbles",
            img: require('./assets/pebbles_icon.png'),
            full: require('./assets/pebbles_full.png'),
            desc: "Mix ups are how Pebbles approaches each battle making his motions are rarely predictable. Once he has his opponent in the air, his power increases making him a terrifying foe."
        },
        {
            name: "Pomme",
            img: require('./assets/pomme_icon.png'),
            full: require('./assets/pomme_full.png'),
            desc: "Pomme is regarded as a setup character. Using her resources such as traps and projectiles plus proper timing, she can devastate her foes with her brute strength. If her strength isn't enough, she is able to apply super armor to guts through attacks."
        },
        {
            name: "StraleChi",
            img: require('./assets/stralechi_icon.png'),
            full: require('./assets/stralechi_full.png'),
            desc: "StraleChi possesses the all rounder play style. His Hashira sword techniques  allow him to close the distance between him and his opponent. By utilizing his  long startups but quick release sword slashes and tossing water to keep foes where they are."
        },
        {
            name: "Blain",
            img: require('./assets/blaine_icon.png'),
            full: require('./assets/blaine_full.png'),
            desc: "Blaine armed with a polearm, is designated under the archetype of a midrange glass cannon; he is able to keep his opponents at bay while dealing massive amounts of damage. With practice you'll be able to master his rage  and character specific ability to burn foes."
        },
    ];
    const [charImg, setCharImg] = useState(char[0].full)
    const [charDesc, setCharDesc] = useState(char[0].desc)
    const styleImg = {
        width: "100px",
        height: "100px",
        display: "flex",
        justifyItems: "center",
    }
    const bigCircle = {
        width: "280px",
        height: "280px",
        display: "flex",
        justifyItems: "center",
    }

    return (
        <div className="mt4 w-100 flex justify-center items-center flex-wrap pv4 black bg-white tl">
            <div className="tc center w-100 ">
                <p className="">SELECT YOUR</p>
                <h1 className="ma0 pa0 f1">FIGHTER</h1>
                <p className="mw7 center tc">Unravel the story of 5 teens blessed with elemental powers, but cursed with scarred pasts that have led them to a common, but destructive, goal.</p>
            </div>

            <div className="w-50-ns w-80 w-80-m flex justify-center flex-wrap mt5 ">
                {
                    char.map((icon, index) => {
                        return (
                            <div key={index} className="  br-100 tc " style={styleImg}>
                                <div className=" center flex items-center" >
                                    <div className="char-card-icon "
                                        onClick={(e) => {
                                            setCharImg(char[index].full)
                                            setCharDesc(char[index].desc)

                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.parentElement.classList.add("grow");
                                            console.log(e.target)
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.parentElement.classList.remove("pointer");
                                        }}>
                                        <Image src={icon.img} alt="cocoa icon image" width={80} height={80} className="br-100  "
                                            onClick={(e) => { e.target.classList.add("ba", "bg-black") }}
                                            onMouseLeave={(e) => {
                                                e.target.classList.remove("ba", "bg-black");
                                            }} />
                                        <p className="tc ma0 pa0">{icon.name}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }


                <div className="w-80-ns w-100-m w-100 pa3-ns ma0 pa0 flex flex-wrap-reverse ">
                    <p className="i pa4 f7 black-70">{charDesc}</p>
                </div>

            </div>
            <div className=" flex items-center mt0-ns mt2-m mt2" style={bigCircle}>
                <figure className="  ma0 pa0  br-100  mw6  center w-100 h-100 flex items-center" style={{ backgroundColor: "#5055" }}>
                    <Image src={charImg} alt="character full image" width={340} height={340} className="ma0 pa0 center" />
                </figure>
            </div>




        </div>
    )
}