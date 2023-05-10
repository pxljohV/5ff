import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../Components/banner";
import Characters from "../Components/characters";
import GameModes from "../Components/gameModes";
import Bottom from "../Components/bottom";
import Footer from "../Components/footer";
import Link from "next/link";
const smallLogo = require("../Components/assets/5ff-letters.svg");


export default function Home({ data }) {
  return (
    <div className="">
      <Head className="ma0 pa0 mb0">
        <title>5 FORCE FIGHTERS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
        />
      </Head>

      <header className="ma0 pa0 fixed top-0 z-1">
        <nav
          className="fixed w-100 pa4-ns pv4 ph3 ma0 h2 top-0 flex items-center justify-between  bb b--pink  "
          style={{ backgroundColor: "#1c0f1fdd" }}
        >
          <div className="w-60 ">
            <div className="flex ">
              <Link href="/">
                <h1 className="white f4 ba pa2 ">
                  <span className="orange">5 </span>FORCE FIGHTERS
                </h1>
              </Link>
            </div>
          </div>
          <div className=" flex justify-center ">
            <p className="orange b pointer mr3 f4-ns f5 pr2">HOME</p>
            <p className="white b pointer f4-ns f5">NEWS</p>
          </div>
        </nav>
      </header>

      <main className="ma0 pa0">
        <Banner />
        <Characters />
        <GameModes />
        <Bottom />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}