import { useNavigate } from 'react-router-dom'; // Importieren der useNavigate-Hook
import { useTranslation } from 'react-i18next'; // Importieren der useTranslation-Hook

const Impressum = () => {
  const navigate = useNavigate(); // Verwenden der useNavigate-Hook
  const { t } = useTranslation(); // Verwenden der useTranslation-Hook

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('impressum.title')}</h1>
      <p>{t('impressum.section1')}</p>
      <p>Murat Yaglioglu<br />75177 Pforzheim</p>
      <p>{t('impressum.representative')}<br />Murat Yaglioglu</p>
      <p>{t('impressum.contact')}<br />Telefon: 01521 -7011223<br />E-Mail: m.yaglioglu@web.de</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">{t('impressum.disclaimerTitle')}</h2>
      <h3 className="text-xl font-bold mb-2">{t('impressum.contentLiabilityTitle')}</h3>
      <p>{t('impressum.contentLiability')}</p>
      <p className="mt-4">
        {t('impressum.generator')} <a href="https://www.kanzlei-hasselbach.de/impressum-generator/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Impressum Generator</a> {t('impressum.generatorSource')}
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        {t('impressum.backToMain')}
      </button>
    </div>
  );
};

export default Impressum;