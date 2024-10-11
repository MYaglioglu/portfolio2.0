import { ComputersCanvas } from './canvas';
import { motion } from 'framer-motion';
import profileImage from '../assets/muratfront.png'; // Bild importieren
import { styles } from '../styles';

// Hier importierst du die Animations-Funktionen
import { textVariant, fadeIn } from '../../src/utils/motion'; // Den Pfad zu deiner motion.js Datei anpassen
import { useState, useEffect } from 'react';

const Hero = () => {
  // State für das aktuelle Wort
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Frontend Developer', 'UI/UX Designer', 'Tech Enthusiast', 'React Developer', 'Angular Developer']; //  Liste der Wörter

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Wechsel alle 2 Sekunden

    return () => clearInterval(interval); // Cleanup bei unmount
  }, [words]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div
            variants={textVariant(0.5)} // Text-Animations-Variante verwenden
            initial="hidden"
            animate="show"
            className='w-5 h-5 rounded-full bg-[#915EFF]'
          />
          <motion.div
            variants={fadeIn("down", "spring", 0.7, 1)} // Fade-In Animation anwenden
            initial="hidden"
            animate="show"
            className='w-1 sm:h-80 h-40 violet-gradient'
          />
        </div>

        <div>
          <motion.h1
            variants={textVariant(1)} // textVariant mit Verzögerung von 1 Sekunde
            initial="hidden"
            animate="show"
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I&apos;m <span className='text-[#915EFF]'> Murat </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "spring", 1.2, 1)} // fadeIn für den Text anwenden
            initial="hidden"
            animate="show"
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I am a <br className='sm:block hidden' />
            {/* Hier wird der animierte Text angezeigt */}
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20 }} // Anfangszustand
              animate={{ opacity: 1, y: 0 }} // Endzustand
              exit={{ opacity: 0, y: -20 }} // Zustand beim Verlassen
              transition={{ duration: 0.5 }} // Dauer der Animation
            >
              {words[currentWordIndex]}
            </motion.span>
          </motion.p>
        </div>

        <div className='absolute transform scale-x-[-1] top-2 right-0'>
          <motion.img
            variants={fadeIn("right", "spring", 1.5, 1)} // Bild einfliegen lassen
            initial="hidden"
            animate="show"
            src={profileImage}
            alt="Murat"
            className='w-[500px] h-[600px] rounded-full object-cover '
          />
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              variants={fadeIn("up", "spring", 1.8, 1)} // Bounce Animation für den Scroll-Indikator
              initial="hidden"
              animate="show"
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
