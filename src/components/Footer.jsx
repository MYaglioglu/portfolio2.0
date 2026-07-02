import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Importieren des Link-Komponenten
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <BackgroundBeamsWithCollision>

      <div className="w-full h-[200px] mx-auto px-4 bg-primary">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">Murat Yaglioglu</h2>
            <p className="text-blue-300">{t('footer.title')}</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/MYaglioglu" className="hover:text-blue-300 transition-colors">
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/murat-yaglioglu/" className="hover:text-blue-300 transition-colors">
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:mail@muratyalioglu.de" className="hover:text-blue-300 transition-colors">
              <FaEnvelope size={24} />
              <span className="sr-only">E-Mail</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Murat Yaglioglu. {t('footer.rightsReserved')}</p>
        </div>
        <div className="mt-4 text-center text-blue-300 text-sm">
          <Link to="/impressum" className="hover:text-blue-500 transition-colors">{t('footer.impressum')}</Link>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default SectionWrapper(Footer, "footer");


