import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Skills from './Skills.jsx'
import Creations from './Creations.jsx'
import '../assets/css/About.css'

const About = () => {

    const [btnAboutIsTrue, setBtnAboutIsTrue] = useState(false)
    const aboutRef = useRef(null)

    const btnAbout = () => {
        setBtnAboutIsTrue(true)
    }

    useEffect(() => {
        setTimeout(() => {
            aboutRef.current.style.left = "50%"
        }, 500)
    }, []);


    return (
        <>
            <section className='about'>
                <div className="about__content" ref={aboutRef}>
                    <motion.div className='about__text'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
                    >
                        <h1 className='title-font about__title'>Qui suis-je ?</h1>
                        <p className="about__description">
                            Je m&apos;appelle
                            <span className='colorRed'> Damien</span> 
                            , j&apos;ai 22 ans et je suis 
                            un développeur web fullstack spécialisé dans le   
                            <span className='colorYellow'> React.JS</span>. 
                            Plongé dans l&apos;informatique 
                            depuis 2015, j&apos;ai toujours voulu apprendre 
                            de nouvelles technologies en tout genre.
                        </p>
                    </motion.div>
                    <a href="#skills">
                        <button className='about__btn' onClick={btnAbout}>En savoir +</button>
                    </a>
                </div>
            </section>
            
            {btnAboutIsTrue && (
                <>
                    <Skills />
                    <Creations />
                </>
            )}

        </>
    )
}

export default About