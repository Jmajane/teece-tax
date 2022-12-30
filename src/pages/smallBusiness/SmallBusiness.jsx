import './smallBusiness.css'

import Footer from '../footer/Footer'

import {GiCheckMark} from 'react-icons/gi'
import {MdAttachMoney} from 'react-icons/md'

const SmallBusiness = () => {
  return (
    <section id='smallBusiness'>
      <div className='container smallBusiness__title'>
        <h1>Small Business & LLC</h1>
      </div>

      <div className='container smallBusiness__container'>
        <article className='smallBusiness'>
          <div className='smallBusiness__head'>
            <h2>Services</h2>
          </div>

          <ul className='smallBusiness__list'>
            <li>
              <p><GiCheckMark className='home__list-icon' /> Bookkeeping</p>
              <p><MdAttachMoney className='home__list-icon' />300/Mo</p>
            </li>
            <li>
              <p><GiCheckMark className='home__list-icon' /> Payroll Services</p>
              <p><MdAttachMoney className='home__list-icon' />100/Mo</p>
            </li>
            <li>
              <p><GiCheckMark className='home__list-icon' /> Quarterly & Annual Payroll Filings</p>
              <p className='smallBusiness__mobile'><MdAttachMoney className='home__list-icon' />Included with Payroll</p>
            </li>
            <li>
              <p><GiCheckMark className='home__list-icon' /> 1120S Tax Return (S Corps)</p>
              <p className='smallBusiness__mobile'><MdAttachMoney className='home__list-icon' />Starting at 600 Annual</p>
            </li>
            <li>
              <p><GiCheckMark className='home__list-icon' /> 1065 Partnership Return</p>
              <p className='smallBusiness__mobile'><MdAttachMoney className='home__list-icon' />Starting at 400 Annual</p>
            </li>
          </ul>
        </article>
      </div>

      <Footer />
      
    </section>
  )
}

export default SmallBusiness