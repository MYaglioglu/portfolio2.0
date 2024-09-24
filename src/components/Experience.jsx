import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import {  textVariant } from '../utils/motion'

const ExperienceCard = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Developer Experience.</h2>
      </motion.div>
    </>
  )}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Developer Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.title}
              date={experience.date}
              dateClassName="text-white"
              iconStyle={{ background: '#915EFF', color: '#fff' }}
              contentStyle={{ background: '#1d1836', color: '#fff' }}
              icon={<img src={experience.icon} alt={experience.title} />}
            >
              <h3 className="vertical-timeline-element-title text-white">{experience.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-secondary">{experience.company_name}</h4>
              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((desc, index) => (
                  <li key={index} className="text-white">{desc}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

    </>
  )
}

export default SectionWrapper(Experience, "work")