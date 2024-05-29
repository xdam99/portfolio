import '../assets/css/Creations.css';
import { useEffect, useState } from 'react';
import { Carousel } from "antd";
import { motion } from 'framer-motion';

const Creations = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [creations, setCreations] = useState(null);
    const [logos, setLogos] = useState(null);
    const [switchCreations, setSwitchCreations] = useState(false);

    const handleSwitchCreations = () => {
        if(switchCreations) {
            setSwitchCreations(false);
        } else {
            setSwitchCreations(true);
        }
    };

    const fetchApiSite = async () => {
        setIsLoaded(true);
        setError(null);
        try {
            const res = await fetch('./assets/api/sites.json', { cache: "no-cache" });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setCreations(data);
            console.log("Fetched data:", data);
        } catch (err) {
            console.error("Fetch error:", err);
            setError(err);
        } finally {
            setIsLoaded(false);
        }
    };

    const fetchApiLogo = async () => {
        setIsLoaded(true);
        setError(null);
        try {
            const res = await fetch('./assets/api/logo.json', { cache: "no-cache" });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setLogos(data);
            console.log("Fetched data:", data);
        } catch (err) {
            console.error("Fetch error:", err);
            setError(err);
        } finally {
            setIsLoaded(false);
        }
    };

    useEffect(() => {
        fetchApiSite();
        fetchApiLogo();
    }, []);

    if (error) {
        return <div>Erreur : {error.message}</div>;
    }
    if (isLoaded) {
        return <div>Chargement en cours...</div>;
    }

    return (
        <section className="creations">
            <h1 className="title-font creations__title">Creations</h1>

            <div className="creations__content">

                <div className="creations__pc">
                    <div className='creations__pc-top'>
                        {(switchCreations) && (
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >                            
                                <h2 className="title-font creations__subtitle">Mes créations web</h2>
                                <Carousel className="creations__web__carousel" autoplay>
                                    {creations && creations.map(creation => (
                                        <a className="creations__web__item" href={creation.url} key={creation.id} target='_blank'>
                                            <div className={`creations__web__content ${creation.class}`}>
                                                <img className='creations__web__img' src={`../src/assets/img/creations/${creation.img}`} alt={creation.name} />
                                            </div>
                                        </a>
                                    ))}
                                </Carousel>
                            </motion.div>
                        )}
                        {(!switchCreations) && (
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <h2 className="title-font creations__subtitle">Mes créations graphiques</h2>
                                <Carousel className="creations__logo__content" autoplay>
                                {logos && logos.map(logo => (
                                    <div key={logo.id} className="carousel__content">
                                        {logo.nbImg === 2 && (
                                            <>
                                                <img className='carousel__logo bg-white' src={`./src/assets/img/creations/${logo.imgBlack}`} alt={logo.altBlack} />
                                                <img className='carousel__logo bg-black' src={`./src/assets/img/creations/${logo.imgWhite}`} alt={logo.altWhite} />
                                            </>
                                        )}
                                        {logo.nbImg === 1 && <img className='carousel__logo bg-black' src={`./src/assets/img/creations/${logo.img}`} alt={logo.alt} />}
                                    </div>
                                ))}
                                </Carousel>

                            </motion.div>
                        )}
                        <input className='creations__btn' type="button" value={ switchCreations ? "Voir Logo" : "Voir site web" } onClick={ handleSwitchCreations } />
                    </div>
                    <div className='creations__pc-center'>
                    </div>
                    <div className='creations__pc-bottom'></div>
                </div>

            </div>

        </section>
    );
}

export default Creations;
