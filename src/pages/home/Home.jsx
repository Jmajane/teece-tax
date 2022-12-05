import React from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import {GiCheckMark} from 'react-icons/gi'
import "./home.css"


const Home = () => {
  return (
    <section id='home'>
      <Header />
      <div className='home__info'>
        <p>Teece Tax Solutions is a local tax preparation & bookkeeping business 
          located in Western Massachusetts, yet servicing clients across the entire 
          United States at an affordable cost. Services are offered in both English 
          and Spanish. Services are available both in person and virtual with our 
          fully encrypted secure portal, zoom calls, and in person appointments. Our 
          financial knowledge combined with an unmatched work ethic will ensure 
          clients can optimize their financial resources and attain their financial 
          goals.</p>
      </div>
      <div className='container home__container'>
        <article className='home'>
          <div className='home__head'>
            <h2>Services</h2>
          </div>

          <ul className='home__list'>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Tax Preparation</p>
            </li>                
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Prior Years Tax Preparation</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Multi-State Tax</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Tax Planning</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Amended Returns</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Bookkeeping</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Payroll</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Financial Statements and Projections</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Budgeting</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Free Initial Consultation</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Free Review of Prior Tax Returns</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Pricing</p>
            </li>
          </ul>
        </article>

        <article className='home'>
        <div className='home__head'>
            <h2>Clients</h2>
          </div>

          <ul className='home__list'>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Individuals</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Sole Proprietors</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Partnerships</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>S-Corps</p>
            </li>
            <li>
              <GiCheckMark className='home__list-icon' />
              <p>Bilingual "English & Spanish"</p>
            </li>
          </ul>
        </article>

        <article className='home'>
        <div className='home__head'>
            <h2>Staff</h2>
          </div>

          <div>
            <h6>Shawn Teece</h6>
            <p></p>
            <h6>Zuleyka Alvelo-Teece</h6>
            <p></p>
          </div>
        </article>

        <article className='home'>
        <div className='home__head'>
            <h2>Resources</h2>
          </div>
          
          <ul className='home__list'>
            <li>Tax Act Portal</li>
            <li>IRS Website</li>
            <li>MA DOR Website</li>
            <li>CT DOR Website</li>
            <li>VT Dept. of Taxes</li>
            <li>NY Dept. of Taxes</li>
            <li>Where's My Refund</li>
          </ul>
        </article>
      </div>
      <Footer />
    </section>
  )
}

export default Home