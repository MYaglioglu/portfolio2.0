import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importieren von PropTypes
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Importieren von react-scroll
import { styles } from '../styles';
import { logo, menu, close } from '../assets'; // Menü- und Schließen-Icons
import deFlag from '../assets/deFlag.png';
import enFlag from '../assets/enFlag.png';

const Navbar = ({ handleLanguageChange }) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isPulsing, setIsPulsing] = useState(false);
  const [toggle, setToggle] = useState(false); // Toggle für das Menü

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "about",
    "work",
    "technologies",
    "projects",
    "contact",
  ];

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    setCurrentLanguage(newLanguage);
    handleLanguageChange(newLanguage);
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 1000); // Pulsanimation für 1 Sekunde
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <RouterLink
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            scroll.scrollToTop();
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            &nbsp;
            <span className='sm:block hidden'> Yaglioglu </span>
          </p>
        </RouterLink>
        
        {/* Desktop Navigation */}
        <div className='hidden sm:flex items-center gap-5'>
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className={`${
                active === item ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(item)}
            >
              {t(`navbar.${item}`)}
            </ScrollLink>
          ))}
          <img
            src={currentLanguage === 'en' ? enFlag : deFlag}
            alt='language flag'
            className={`w-8 h-8 cursor-pointer rounded-full hover:scale-110 transition-transform duration-200 ${isPulsing ? 'animate-pulse' : ''}`}
            onClick={toggleLanguage}
          />
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navItems.map((item) => (
                <ScrollLink
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className={`${
                    active === item ? "text-white" : "text-secondary"
                  } hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(false); // Menü schließen beim Klicken
                    setActive(item);
                  }}
                >
                  {t(`navbar.${item}`)}
                </ScrollLink>
              ))}
              <img
                src={currentLanguage === 'en' ? enFlag : deFlag}
                alt='language flag'
                className={`w-8 h-8 cursor-pointer rounded-full hover:scale-110 transition-transform duration-200 ${isPulsing ? 'animate-pulse' : ''}`}
                onClick={() => {
                  toggleLanguage();
                  setToggle(false); // Menü schließen beim Sprachwechsel
                }}
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired,
};

export default Navbar;
