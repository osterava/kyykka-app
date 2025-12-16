import Image from "next/image";
import testi from './images/aktiivi_3.png'
import r from './images/r.jpg'

export default function Home() {
  return (
      <div className="">
        <div> 
          <Image src={r} alt="header" className="h_img" />
        </div>

        <div className="parent">
          <div className="div1">
            <div className="text">
              <h2>JYVÄSKYLÄN MESTARUUSKYYKKÄ</h2>
              <span className="line"></span>
              <p>Milloin missä, introteksti</p>
              </div>
          </div>

          <div className="div2">
            <Image src={testi} alt="aktiivi" className="img" />
            <div className="text">
              <h2>KILPAILUPÄIVÄN AIKATAULU</h2>
              <span className="line"></span>
              <a href="/aikataulu">AIKATAULU</a>
            </div>
          </div>

          <div className="div3">
            <Image src={testi} alt="aktiivi" className="img" />
            <div className="text">
              <h2>KILPAILUPÄIVÄN LOHKOJAKO</h2>
              <span className="line"></span>
              <a href="/lohkojako">LOHKOJAKO</a>
            </div>
          </div>

          <div className="div4">
            <div className="text">
              <h2>TULOKSET</h2>
              <span className="line"></span>
              <a href="/tulokset">TULOKSET</a>
              </div>
            <Image src={testi} alt="aktiivi" className="img" />
            </div>
          </div>
    </div>
  )
}
