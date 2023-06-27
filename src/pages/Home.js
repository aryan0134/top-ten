import React from 'react'
import { HomeContainer } from './HomeContainer'
import uuid from 'react-uuid'
import gif from './marketing.gif'
import { Link } from 'react-router-dom'
import about2 from './about2.gif'
import aboutPortrait from './aboutPortrait.jpg'
import about3 from './about3.gif'
import { IoMdContacts } from 'react-icons/io';
import contact1 from './contact1.gif'
import ContactForm from './ContactForm'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'


function Home() {
  return (
  <>
    <section id='homepage'>
      <div className='div1'>
        {HomeContainer.map((arrow)=>{
            return(
                <div key={uuid()} className='job-title'>
                  <Link to={arrow.path} style={{ textDecoration: 'none' }}>
                    <h1 key={uuid()} className='job-heading'>{arrow.title}</h1>
                  </Link>
                </div>
            )
        })}
    </div>
    <div className='div2'>
      <img src={gif} alt='my-GIF' />
      <div className='show'> 
      </div>
    </div>
  </section>
  <section id='about'>
    <div className='about-text'>
      <div className='space'>
        <p>Our business is a website that showcases the top 10 businesses of various kinds, promoting their products and services to a wide audience. By curating a selection of the best businesses in each category, We provide valuable information to potential customers who are looking for reliable and high-quality services. our platform acts as a trusted source for recommendations, helping businesses gain exposure and grow their customer base. With a user-friendly interface and informative content, Our website helps users make informed decisions and provides businesses with a platform to showcase their strengths. Our business ultimately serves as a bridge between customers and businesses, connecting them in a mutually beneficial way.</p>
      </div>
    </div>
    <img  src={aboutPortrait} className='picture'/>
    <div className='about-img'>
      <img src={about2} className='picture3' />
      <img src={about3} className='picture2' />
    </div>
  </section>
  <section id='contact'>
    <div className='contact-logo'><IoMdContacts /><span>Contact Us</span><img src={contact1} /></div>
    <div className='contact-content'>
      <div className='contact-form'>
        <ContactForm />
      </div>
      <div className='contact-details'>
        <div className='c-up'>
          <div className='up-heading'>Get In Touch</div>
          <div className='up-info'>Just hit me up on my Email. You can text me too if you want or just call me. We will try to get back to you as soon as possible.</div>
        </div>
        <div className='c-down'>
          <div className='down-heading'>My Address</div>
          <div className='down-info'>
            <ul>
              <li><FaMapMarkerAlt /><span>Sector-5 MDC, Panchkula, India</span></li>
              <li><FaMobileAlt /><span>+91 9872629802</span></li>
              <li><FaEnvelope /><span>citadelindiatech@gmail.com</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
  )
}

export default Home