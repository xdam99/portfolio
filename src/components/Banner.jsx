import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from './About.jsx'
import '../assets/css/Banner.css'

const Banner = () => {
    const [btnBannerIsTrue, setBtnBannerIsTrue] = useState(false)
    const bannerTextRef = useRef(null)
    const containerRef = useRef(null)
    const overflowRef = useRef(null)
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/about") {
            setBtnBannerIsTrue(true)
            containerRef.current.style.background = "#101010"
            setTimeout(() => overflowRef.current.style.overflow = "visible", 3001)
        }
    }, [location.pathname]);

    const btnBanner = () => {
        bannerTextRef.current.style.left = "-70%";
        containerRef.current.style.background = "#101010"
        setTimeout(() => setBtnBannerIsTrue(true), 1001)
        setTimeout(() => overflowRef.current.style.overflow = "visible", 3001)
    }


    return (
        <>
            <div className="container" ref={overflowRef}>
                <div className="container__content" ref={containerRef}>
                    {btnBannerIsTrue && (
                        <About />
                    )}
                    {!btnBannerIsTrue && (                
                        <div className="banner__text" ref={bannerTextRef}>
                            <motion.h1 
                                className='title-font banner__title'
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                Damien JOSSE
                            </motion.h1>
                            <motion.h2 
                                className="title-font banner__subtitle"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Developpeur web fullstack
                            </motion.h2>
                            <input className="banner__button" type="button" onClick={btnBanner} value="découvrez-moi !" />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Banner