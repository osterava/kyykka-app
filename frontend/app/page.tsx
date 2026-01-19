import Image from "next/image";
import yellow from './images/yellow.png'
import r from './images/start.jpg'
import mobileImage from './images/mobiili.jpg'
import StartImage from "./common/startImage"
import Tek from './images/TEK.png'
import Celcius from './images/celsius.png'

export default function Home() {
  return (
      <div className="">
          <StartImage
            desktopImage={r}
            mobileImage={mobileImage}
            alt="Starting Image"
            className="h_img"
            width={1920}
            height={1080}
          />

        <div className="parent">
          <div className="div1">
            <Image src={yellow} alt="Yellow_Ball" className="img" />
            <div className="text">
              <h2>JYVÄSKYLÄN MESTARUUSKYYKKÄ</h2>
              <span className="line"></span>
              <p>Jyväskylän mestaruus kyykkäkilpailut, eli tuttavallisemmin JM-kyykkä, pelataan lauantaina 24.1.2026 kampuksen kentällä Jyväskylässä. 
              </p>
              <p>Tapahtuman järjestävät Algo ja Ynnä, ja luvassa on rento, mutta sopivan kilpailullinen turnauspäivä. Jokaiselle joukkueelle kertyy vähintään kolme peliä, joten kentällä pääsee oikeasti pelaamaan eikä vain odottelemaan. Päivän aikana on tarjolla lämmintä syötävää ja juotavaa sekä pientä oheisohjelmaa pitämässä tunnelmaa korkealla.</p>
              <p>
              Turnauksen voittajajoukkue nappaa neljän hengen joukkuelipun Akateemisen kyykän MM-kisoihin Tampereelle <i>(arvo 69 euroa).</i> Lisäksi voittajilla on mahdollisuus ostaa bussipaikat Jyväskylästä Tampereelle lähtevään yhteisbussiin.</p>
              <p>
              Kerää porukka, pue haalarit päälle ja tule mukaan ottamaan mittaa Jyväskylän kovimmista kyykkäjoukkueista.</p>
              </div>
          </div>

          <div className="div2">
            <Image src={yellow} alt="Yellow_Ball" className="img" />
            <div className="text">
              <div>
              <h2>KILPAILUPÄIVÄN AIKATAULU</h2>
              <span className="line"></span>
              <p>9:30 Joukkueiden saapuminen paikalle</p>
              <p>10:00 Lohkopelit alkavat</p>
              <p>12:30 - 14:00 Lounas</p>
              <p>14:00 Pudotuspelit alkavat</p>
              <p>15:30 Mitalipelit alkavat</p>
              </div>
            </div>
          </div>

          <div className="div3">
            <Image src={yellow} alt="Yellow_Ball" className="img" />
            <div className="text">
              <div>
              <h2>Yleisiä ohjeita</h2>
              <span className="line"></span>
              </div>
              <h3>Säännöt</h3>
              <div>
              <p>JM-kyykässä pelataan Akateemisen MM-kyykän sääntöjen mukaisesti. Sääntöihin pääset tutustumaan <a href="https://kyykka.fi/page/saannot">täältä</a>.</p>
              </div>
              <h3>Ruokailu</h3>
              <p>Turnauksessa pelaaville joukkueelle on tarjolla lämmin ruoka- ja juomatarjoilu. Ruokailu sisältyy joukkueen osallistumismaksuun.</p>
            <h3>Turvallisemman tilan periaatteet</h3>
            <p>Tapahtumassa noudatetaan JYY:n <a href="https://jyy.fi/wp-content/uploads/2022/04/JYYn-turvallisemman-tilan-periaatteet.pdf">turvallisemman tilan periaatteita.</a> Toivomme, että kaikki osallistujat kunnioittavat toisiaan ja luovat yhdessä mukavan ja turvallisen ilmapiirin kaikille. Mikäli havaitset asiatonta käytöstä, voit ottaa yhteytettä tapahtuman yhdenvertaisuusvastaavaan <i>Henna-Riina Katajamäkeen</i> tai <i>Reetta Manniseen</i>.
            </p>
            <h3>Muuta kysyttävää?</h3>
            Projektitiimimme vastaa mielellään kaikkiin kysymyksiin liittyen JM-kyykkään. Voit ottaa meihin yhteyttä sähköpostitse osoitteessa <a href="mailto:projektitiimi@jm-kyykka.fi">projektitiimi@jm-kyykka.fi</a>
            </div>

          </div>

            <div className="div4">
            <h2>Yhteistyökumppanit</h2>
            <span className="line"></span>
            <div className="sponsors">
              <a
                href="https://www.tek.fi"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-wrapper"
              >
            <Image
              src={Tek}
              alt="TEK"
              className="sponsor"
              width={300}
              priority
            />
            </a>
            <a
            href="https://www.celsius.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-wrapper"
            >
            <Image
              src={Celcius}
              alt="Celsius"
              className="sponsor"
              width={300}
              priority
            />
            </a>
          </div>
          </div>
          </div>
    </div>
  )
}
