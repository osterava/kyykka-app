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
              <h2>Jyväskylän mestaruuskyykkä 2026!</h2>
              <span className="line"></span>
              <p>Milloin missä, introteksti</p>
              </div>
          </div>

          <div className="div2">
            <Image src={testi} alt="aktiivi" className="img" />
            <div className="text">
              <h2>Aikatauluun</h2>
              <span className="line"></span>
              <a href="/aikataulu">Aikatauluun</a>
            </div>
          </div>

          <div className="div3">
            <Image src={testi} alt="aktiivi" className="img" />
            <div className="text">
              <h2>Lohkojakoon</h2>
              <span className="line"></span>
              <a href="/lohkojako">lohkojakoon</a>
            </div>
          </div>

          <div className="div4">
            <div className="text">
              <h2>Tulokset</h2>
              <span className="line"></span>
              <a href="/tulokset">tuloksiin</a>
              </div>
            <Image src={testi} alt="aktiivi" className="img" />
            </div>
          </div>
    </div>
  )
}
