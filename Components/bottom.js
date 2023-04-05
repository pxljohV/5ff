import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Bottom() {

    return (
        <div className="pa2">
            <div className="tc pa4 center w-100">
                <p className="w-70 tc center " >5 Force Fighters is a 2D fighting game with a cast of unstoppable characters, and a combat system that boasts universal offensive and defensive options. Unravel the story of 5 teens blessed with elemental powers, but cursed with scarred pasts that have led them to a common, but destructive, goal.</p>
            </div>

            <div className="mt4 tc center">
            <button className="bg-purple pa2 pv3 w5 pointer ba b--none br2 grow"  style={{ backgroundColor: "#5055"}}>WISHLIST</button>
            </div>
        </div>
    )
}