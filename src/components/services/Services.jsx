import {useRef, useState} from "react";
import "./services.scss";
import {motion} from "framer-motion";
import Skills from "./skills/Skills.jsx";
import Carousel from "./carousel/Carousel.jsx";
import Lightbox from "./skills/Lightbox.jsx";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const codeTxt = "Több olyan munkahelyem is volt, ahol többen dolgoztunk egy-egy projekten, ezért gyorsan\n" +
    "                            megtanultam, hogy az átlátható könnyen olvasható kód nagyon fontos. Ebben nagy segítséget\n" +
    "                            nyújt\n" +
    "                            a Prettier. HTML5 szemantikus elemeket használok értelemszerűen, tehát nem feltétlenül\n" +
    "                            szeretem\n" +
    "                            az olyan kódot, ami tele van „szórva” csak div elemekkel. A CSS preprocerszorok közül a\n" +
    "                            kedvencem az SCSS/SASS. A mixinek miatt és a változó alapú css kód jelentősen lerövidíti a\n" +
    "                            kész\n" +
    "                            kódot és a munkát."
const buildTxt = "Sitebuild az, ami igazán közel áll hozzám. Építettem anno oldalt a Photoshop slice funkciója\n" +
    "                            segítségével. Nagyon sok arculatot kaptam Sketch formátumban. Újabban InVision és Figma\n" +
    "                            grafikai terveket valósítok meg. A másik oldal sem ismeretlen számomra, mert az Adobe\n" +
    "                            termékcsalád számos alkalmazásával készítettem már website layout-okat. Az utóbbi években a\n" +
    "                            SEO szabványok miatt még szorosabb kommunikáció szükséges a grafikusokkal, hiszen figyelembe\n" +
    "                            kell venni accessibility tényezőket. A tervezés során szorgalmazni szoktam a mobil firts\n" +
    "                            nézőpontot."
const programsTxt = "Ennek az oldalnak a kódját Webstrom-ban írtam, de többet használtam a VS Code kód\n" +
    "                            szerkesztőjét karrierem során. Legutóbb a taskokat Jirában tologatuk a GB Solution-nél.\n" +
    "                            Használtam már Trellot és a Microsoft feladat kezelőjét is.\n" +
    "                            Távmunka miatt a kedvenc kommunikációs eszközöm a Teams.\n" +
    "                            Az Adobe appok közül a grafikai programokat jól ismerem.\n" +
    "                            Saját Macbook laptopon dolgozom, de az Easyway-nél az egységes ökoszisztéma miatt Windows\n" +
    "                            laptopot kellett használni és elboldogultam vele.\n" +
    "                            Git kezelő esetetében rászoktattak a SourceTree-re és tetszik. GitLab felületét használtuk a\n" +
    "                            legtöbbet. Nem ragaszkodom igazán egyik programhoz se, mert tudom mindig lesz újabb és jobb."

const futureTxt = "Nem szerettem volna bullshit szöveggel operálni, de továbbra is szeretnék fejlődni és\n" +
    "                            szívesen tanulok. Az Angular az, ami nagyon érdekel és minden projektnél mutat valami újat,\n" +
    "                            izgalmasat. Azért tetszik ez a keretrendszer, mert sok esetben, amit korábban Javascript\n" +
    "                            alkalmazásával nagyon sok sorral kellett megoldani, az Angular esetében elég pár sor. Sokak\n" +
    "                            szerint a CSS nem is programnyelv, de nagyon sokat ki lehet belőle hozni, akár animáció\n" +
    "                            szinten, akár egyes Javascript funkcionalitást lehet pótolni a segítségével. Ezért kutatom a\n" +
    "                            benne rejlő lehetőségeket, mert például a Stackoverflow oldalon szinte mindent megcsináltak\n" +
    "                            már előttünk csupán jól kell keresni az adott problémára. Igyekszem tartani a lépést a\n" +
    "                            trendekkel, mert nem szeretnék úgy járni, mint mondjuk a jQuery."

const titles = [
    "Coding",
    "Build",
    "Programs",
    "Future",
];
const Services = () => {
    const ref = useRef();
    const [selectedBox, setSelectedBox] = useState(null);

    const openLightbox = (boxIndex) => {
        setSelectedBox(boxIndex);
    };

    const closeLightbox = () => {
        setSelectedBox(null);
    };
    return (
        <div>
            <motion.div
                className="services"
                variants={variants}
                initial="initial"
                // animate="animate"
                // whileInView="animate"
                ref={ref}
                animate={"animate"}
            >
                <motion.div className="textContainer" variants={variants}>
                    <p>
                        I focus on helping your brand grow
                        <br/> and move forward
                    </p>
                    <hr/>
                </motion.div>
                <motion.div className="titleContainer" variants={variants}>
                    <div className="title">
                        <img src="/services.webp" alt="Salamon Szilard kepessegek"/>
                        <h1>
                            <motion.b whileHover={{color: "orange"}}>Unique</motion.b>
                            Ideas
                        </h1>
                    </div>
                    <div className="title">
                        <h1>
                            <motion.b whileHover={{color: "orange"}}>For Your</motion.b>
                            Business.
                        </h1>
                        <button>CV letöltése</button>
                    </div>
                </motion.div>
                <motion.div className="listContainer" variants={variants}>
                    {[codeTxt, buildTxt, programsTxt, futureTxt].map((text, index) => (
                        <motion.div
                            key={index}
                            className="box"
                            whileHover={{background: "lightgray", color: "black"}}
                        >
                            <h2>{titles[index]}</h2>
                            <p>{text}</p>
                            <button className="more" onClick={() => openLightbox(index)}>Részletek</button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Lightbox */}
                {selectedBox !== null && (
                    <Lightbox
                        title={titles[selectedBox]}
                        content={[codeTxt, buildTxt, programsTxt, futureTxt][selectedBox]}
                        onClose={closeLightbox}
                    />
                )}
                <Skills/>
                <Carousel/>
            </motion.div>

        </div>
    );
};

export default Services;