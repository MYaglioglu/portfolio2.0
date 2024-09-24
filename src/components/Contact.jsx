import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

//zQ80yCmB4E5mZ1yGu
//template_hwzv9ai
//service_lx5uf4j

const Contact = () => {
  const formRef = useRef();
  const [form, setForm ] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_lx5uf4j',
      'template_hwzv9ai',
      {
        from_name: form.name,
        to_name: 'Murat',
        from_email: form.email,
        to_email: 'm.yaglioglu@web.de',
        message: form.message
      },
      'zQ80yCmB4E5mZ1yGu'
    )
    .then(() => {
      setLoading(false);
      alert('Success! Your message has been sent. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: ''
      });
    
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>
            Get in touch
          </p>
          <h3 className={styles.sectionHeadText}>
            Contact.
          </h3>

          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Your Name
              </span>
              <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder='whats your name?'
                className='bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outlind-none border-none font-medium '   />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Your Email
              </span>
              <input 
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder='whats your email?'
                className='bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outlind-none border-none font-medium '   />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Your Message
              </span>
              <textarea 
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder='whats do you want to say?'
                className='bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outlind-none border-none font-medium '   />
            </label>

            <button 
              type="submit"
              className='bg-tertiary py-3 px-8 text-white w-fit rounded-xl outlind-none border-none font-bold shadow-md shadow-primary '>
              {loading ? 'Sending...' : 'Send '}
            </button>
          </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");