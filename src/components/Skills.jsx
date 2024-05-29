import { motion } from 'framer-motion';
import '../assets/css/Skills.css'

const Skills = () => {
    return (
        <section className="skills" id='skills'>
            <h1 className="title-font skills__title">Compétences</h1>
            <motion.div className="skills__content"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className='skills__tech'>
                    <motion.div className='skills__front-end'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
                    >
                        <h2 className="title-font skills__subtitle">Front-end</h2>
                        <div className="logo-container">
                            <img src="./src/assets/img/skills/html-5.png" alt="html"/>
                            <img src="./src/assets/img/skills/css-3.png" alt="css"/>
                            <img src="./src/assets/img/skills/js.png" alt="js"/>
                            <img src="./src/assets/img/skills/react.png" alt="react"/>
                        </div>
                    </motion.div>
                    <motion.div className='skills__back-end'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                    >
                        <h2 className="title-font skills__subtitle">Back-end</h2>
                        <div className="logo-container">
                            <img src="./src/assets/img/skills/php.png" alt="php"/>
                            <img src="./src/assets/img/skills/laravel.png" alt="laravel"/>
                            <img src="./src/assets/img/skills/node.png" alt="node"/>
                            <img src="./src/assets/img/skills/mysql.png" alt="mysql"/>
                        </div>
                    </motion.div>
                </div>
                <div className='skills__tools'>
                    <motion.div className='skills__code'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
                    >
                        <h2 className="title-font skills__subtitle">Outils</h2>
                        <div className="logo-container">
                            <img src="./src/assets/img/skills/github.png" alt="github"/>
                            <img src="./src/assets/img/skills/git.png" alt="git"/>
                            <img src="./src/assets/img/skills/VSC.png" alt="visual studio code"/>
                        </div>
                    </motion.div>
                    <motion.div className='skills__adobe'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
                    >
                        <h2 className="title-font skills__subtitle">Adobe</h2>
                        <div className="logo-container">
                            <img src="./src/assets/img/skills/photoshop.png" alt="photoshop"/>
                            <img src="./src/assets/img/skills/illustrator.png" alt="illustrator"/>
                            <img src="./src/assets/img/skills/premiere.png" alt="premiere pro"/>
                            <img src="./src/assets/img/skills/after.png" alt="after effects"/>
                            <img src="./src/assets/img/skills/indesign.png" alt="indesign"/>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Skills