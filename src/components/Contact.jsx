import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const CONTACT_EMAIL = 'mail@muratyaglioglu.de'
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const Contact = () => {
  const { t } = useTranslation()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert(t('contact.validationMessage'))
      return
    }

    setLoading(true)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,

          _subject: `Neue Portfolio-Anfrage von ${form.name}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: form.email,
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Form submission failed')
      }

      alert(t('contact.successMessage'))

      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error('Contact form error:', error)
      alert(t('contact.errorMessage'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t('contact.subtitle')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact.title')}</h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <input type="hidden" name="_subject" value="Neue Portfolio-Anfrage" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t('contact.nameLabel')}
            </span>

            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact.namePlaceholder')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t('contact.emailLabel')}
            </span>

            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.emailPlaceholder')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t('contact.messageLabel')}
            </span>

            <textarea
              rows="7"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.messagePlaceholder')}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? t('contact.sending') : t('contact.send')}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')