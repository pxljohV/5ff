import Link from "next/link";
export default function Bottom() {
  return (
    <div className="w-100 center bg-black pa1 pv6-ns pv4 white">
      <div className="tc center w-70-ns w-100  br2 ">
        <h3 className="w-80-ns f1-ns f2-m f2 w-100 center ma0 ">
          {" "}
          <span className="orange">5 </span>FORCE FIGHTERS
        </h3>
        <p className="tc center f3-ns f4 pa3  white  w-70-ns w-100 ma0 ">
          is a fighting game like no other! Where burning meter raises your
          focus and the true force of each distinct fighter. The simple inputs
          are balanced effortlessly with methodical combat systems that also
          partake in the interactive story; the 5 protagonists will embrace the
          powers of the 5-Force, reach Corvegas, and try their damndest to
          defeat Ken D. Sangre.
        </p>
      </div>
      <div className="w-100 mt4 tc center ma0">
        <div className="mw8 center tc  grow btnFx ">
          <Link
            href="https://store.steampowered.com/app/1599170/5_Force_Fighters/"
            className=" linked center "
          >
            WISHLIST NOW
          </Link>
        </div>
      </div>
    </div>
  );
}