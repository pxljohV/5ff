import Image from 'next/image'
const img = require('./assets/banner-logo2.png')

export default function Banner() {

    return (
        <div className="mt4 w-100 tc center ma0 pa0  flex items-center flex-wrap justify-center">
            <div className="tc center ">
                <figure className=" tc ma0 pa0 " style={{width:"500px", height:"500px"}}>
                    <Image src={img} alt="x" width={500}  className=" ma0 pa0 "  />
                </figure>
            </div>
            
            <div className="w-100 ">
                <button className="bg-purple pa2 pv3 w5 pointer ba b--none br2 grow"  style={{ backgroundColor: "#5055"}}>WISHLIST</button>
            </div>

        </div>
    )
}