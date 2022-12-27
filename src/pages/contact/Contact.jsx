import './contact.css'
import Footer from '../footer/Footer'

import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'

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
              <p><AiOutlinePhone /> 413-531-7061</p>
            </li>
            <li>
              <a href='mailto:Taxes@teecetaxsolutions.com' target="_blank" rel="noreferrer"><AiOutlineMail /> Send an email</a>
            </li>
          </ul>
        </article>

        <article className='contact'>
          <div className='contact__head'>
            <h2>Helpful Links</h2>
          </div>

          <ul className='contact__links'>
            <li>
              <a href='https://www.irs.gov/static_assets/error/RUP404.html' target='_blank' rel='noreferrer'>IRS Wheres my refund</a>
            </li>
            <li>
              <a href='https://www.irs.gov/' target='_blank' rel='noreferrer'>IRS</a>
            </li>
            <li>
              <a href='https://mtc.dor.state.ma.us/mtc/_/#1' target='_blank' rel='noreferrer'>MA Wheres my refund</a>
            </li>
            <li>
              <a href='https://mtc.dor.state.ma.us/mtc/_/' target='_blank' rel='noreferrer'>MA Tax Connect Website</a>
            </li>
            <li>
              <a href='https://portal.ct.gov/drs' target='_blank' rel='noreferrer'>CT DOR Website</a>
            </li>
            <li>
              <a href='https://tax.vermont.gov/' target='_blank' rel='noreferrer'>VT Dept. of Taxes</a>
            </li>
            <li>
              <a href='https://www.tax.ny.gov/' target='_blank' rel='noreferrer'>NY Dept. of Taxes</a>
            </li>
          </ul>
        </article>
      </div>

      <Footer />
    </section>
  )
}

export default Contact