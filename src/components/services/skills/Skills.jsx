import {useEffect, useRef, useState} from "react";
import {motion, useAnimation} from "framer-motion";
import "./skills.scss"


const Skills = () => {
    const ref = useRef();
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = () => {
            setTimeout(() => {
                const fetchedSkills = [
                    {id: 1, name: 'HTML5', value: 90},
                    {id: 2, name: 'CSS3 / SASS / Tailwind', value: 95},
                    {id: 3, name: 'Bootstrap', value: 85},
                    {id: 4, name: 'React', value: 60},
                    {id: 5, name: 'Next.js', value: 70},
                    {id: 6, name: 'Angular', value: 30},
                    {id: 7, name: 'Javascript', value: 66},
                    {id: 8, name: 'Wordpress', value: 45},
                    {id: 9, name: 'Joomla!', value: 55},
                    {id: 10, name: 'Directus', value: 35},
                    {id: 11, name: 'LIT Element', value: 63}

                ];
                setSkills(fetchedSkills);
            }, 1000);
        };

        fetchSkills();
    }, []);

    const controls = useAnimation();

    useEffect(() => {
        const onScroll = () => {
            if (ref.current) {
                const elementTop = ref.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight) {
                    controls.start({opacity: 1, height: 'auto'});
                }
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [controls]);

    return (
        <div className="service-wrapper">
            <div className="skill-container">
                <h2>My Skills</h2>
                <ul className="skill-list">
                    {skills.map((skill, index) => (
                        <motion.li
                            key={skill.id}
                            initial={{opacity: 0, height: 0}}
                            animate={{
                                opacity: 1,
                                height: 'auto',
                                width: `${skill.value}%`,
                            }}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.5, delay: index * 0.2}}
                            className="skill-item"
                            ref={ref}
                        >
                            <div className="skill">
                                {skill.name}
                                <motion.div className="progress-bar"/>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;