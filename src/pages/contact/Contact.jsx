import './contact.css'
import Footer from '../footer/Footer'

import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import {GrFacebook} from 'react-icons/gr'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container contact__title'>
        <h1>Contact</h1>
      </div>

      <div className='container contact__container'>
        <article className='contact'>
          <div className='contact__head'>
            <h2>How to Reach us</h2>
          </div>

          <ul className='contact__list'>
            <li>
              <p><AiOutlinePhone className='home__list-icon'/> 413-531-7061</p>
            </li>
            <li>
              <a href='mailto:Taxes@teecetaxsolutions.com' target="_blank" rel="noreferrer"><AiOutlineMail className='home__list-icon'/> Send an email</a>
            </li>
            <li>
              <a href='https://www.facebook.com/TeeceTaxSolutions' target="_blank" rel="noreferrer"><GrFacebook className='home__list-icon'/> Follow us on FaceBook</a>
            </li>
          </ul>
        </article>

        <article className='contact'>
          <div className='contact__head'>
            <h2>Helpful Links</h2>
          </div>

          <ul className='contact__links'>
            <li>
              <a href='https://www.irs.gov/static_assets/error/RUP404.html' target='_blank' rel='noreferrer'><CgWebsite className='home__list-icon'/> IRS Wheres my refund</a>
            </li>
            <li>
              <a href='https://www.irs.gov/' target='_blank' rel='noreferrer'><CgWebsite className='home__list-icon'/> IRS</a>
            </li>
            <li>
              <a href='https://mtc.dor.state.ma.us/mtc/_/#1' target='_blank' rel='noreferrer'><CgWebsite className='home__list-icon'/> MA Wheres my refund</a>
            </li>
            <li>
              <a href='https://mtc.dor.state.ma.us/mtc/_/' target='_blank' rel='noreferrer'><CgWebsite className='home__list-icon'/> MA Tax Connect Website</a>
            </li>
            <li>
              <a href='https://portal.ct.gov/drs' target='_blank' rel='noreferrer'><CgWebsite className='home__list-icon'/> CT DOR Website</a>
            </li>
            <li>
              <a href='https://tax.vermont.gov/' target='_blank' rel='noreferrer'><CgWebsite className='home__list-icon'/> VT Dept. of Taxes</a>
            </li>
            <li>
              <a href='https://www.tax.ny.gov/' target='_blank' rel='noreferrer'><CgWebsite className='home__list-icon'/> NY Dept. of Taxes</a>
            </li>
          </ul>
        </article>
      </div>


      <Footer />
    </section>
  )
}

export default Contact