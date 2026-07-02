import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { useTranslation } from 'react-i18next'

import companyLogo from './../assets/company/meta.png'
import logoMurat from './../assets/logo.png'
import logoWLA from '../assets/logoWLA.png'
import logoDA from '../assets/da.png'


const Experience = () => {
  const { t } = useTranslation()

const experiences = [
  {
    title: t('experience.webDeveloperWla.title'),
    company_name: t('experience.webDeveloperWla.company_name'),
    icon: logoWLA, 
    iconBg: "#383E56",
    date: t('experience.webDeveloperWla.date'),
    points: [
      t('experience.webDeveloperWla.points.0'),
      t('experience.webDeveloperWla.points.1'),
      t('experience.webDeveloperWla.points.2'),
      t('experience.webDeveloperWla.points.3'),
      t('experience.webDeveloperWla.points.4'),
      t('experience.webDeveloperWla.points.5'),
      t('experience.webDeveloperWla.points.6'),
    ],
  },
  {
    title: t('experience.freelanceWebDeveloper.title'),
    company_name: t('experience.freelanceWebDeveloper.company_name'),
    icon: logoMurat,
    iconBg: "#E6DEDD",
    date: t('experience.freelanceWebDeveloper.date'),
    points: [
      t('experience.freelanceWebDeveloper.points.0'),
      t('experience.freelanceWebDeveloper.points.1'),
      t('experience.freelanceWebDeveloper.points.2'),
      t('experience.freelanceWebDeveloper.points.3'),
      t('experience.freelanceWebDeveloper.points.4'),
      t('experience.freelanceWebDeveloper.points.5'),
    ],
  },
  {
    title: t('experience.frontendDeveloperTraining.title'),
    company_name: t('experience.frontendDeveloperTraining.company_name'),
    icon: logoDA,
    iconBg: "#E6DEDD",
    date: t('experience.frontendDeveloperTraining.date'),
    points: [
      t('experience.frontendDeveloperTraining.points.0'),
      t('experience.frontendDeveloperTraining.points.1'),
      t('experience.frontendDeveloperTraining.points.2'),
      t('experience.frontendDeveloperTraining.points.3'),
      t('experience.frontendDeveloperTraining.points.4'),
      t('experience.frontendDeveloperTraining.points.5'),
    ],
  },
];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('experience.subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t('experience.title')}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.title}
              date={experience.date}
              dateClassName="text-white"
              iconStyle={{
                background: experience.iconBg,
                color: '#fff',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              contentStyle={{
                background: '#1d1836',
                color: '#fff',
              }}
              icon={
                <img
                  src={experience.icon}
                  alt={experience.title}
                  className="h-full w-full object-contain rounded-full"
                />
              }
            >
              <h3 className="vertical-timeline-element-title text-white">
                {experience.title}
              </h3>

              <h4 className="vertical-timeline-element-subtitle text-secondary">
                {experience.company_name}
              </h4>

              <ul className="mt-5 ml-5 list-disc space-y-2">
                {experience.points.map((desc) => (
                  <li key={desc} className="text-white">
                    {desc}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
