import "./hero.scss";
import {motion} from "framer-motion";

const textVariants = {
    initial: {
        x: -500, opacity: 0,
    }, animate: {
        x: 0, opacity: 1, transition: {
            duration: 1, staggerChildren: 0.1,
        },
    }, scrollButton: {
        opacity: 0, y: 10, transition: {
            duration: 2, repeat: Infinity,
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,
    }, animate: {
        x: "-220%", transition: {
            repeat: Infinity, repeatType: "mirror", duration: 20,
        },
    },
};
const buttonVariants = {
    initial: {
        color: "white",

    }, hover: {
        color: "#0c0c1d", scale: 1.1,
        background: "orange"
    },
};

const Hero = () => {
    return (<div className="hero">
        <div className="wrapper">
            <motion.div
                className="textContainer"
                variants={textVariants}
                initial="initial"
                animate="animate"
            >
                <motion.h2 variants={textVariants}>SALAMON SZILÁRD</motion.h2>
                <motion.h1 variants={textVariants}>
                    Frontend developer és Sitebuilder
                </motion.h1>
                <motion.div variants={textVariants} initial="initial"
                            animate="animate"
                            className="buttons">
                    <motion.button variants={buttonVariants} whileHover="hover">
                        Legutóbbi munkáim
                    </motion.button>
                    <motion.button variants={buttonVariants} whileHover="hover" initial="initial">Kapcsolat
                    </motion.button>
                    <motion.button variants={buttonVariants} whileHover="hover">CV letöltése</motion.button>
                </motion.div>
                <motion.img
                    variants={textVariants}
                    animate="scrollButton"
                    src="/scroll.png"
                    alt=""
                />
            </motion.div>
        </div>
        <motion.div
            className="slidingTextContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
        >
            Webfejlesztő Sitebuilder
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png" alt=""/>
        </div>
    </div>);
};

export default Hero;