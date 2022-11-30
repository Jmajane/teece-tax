import React from 'react'

import "./home.css"


const Home = () => {
  return (
    <section id='homes'>
        <h1>Welcome</h1>

      <div className='container homes__container'>
        <article className='home'>
          <div className='home__head'>
            <h3>Services</h3>
          </div>

          <ul className='home__list'>
            <li>Tax Preparation</li>
            <li>Prior Years Tax Preparation</li>
            <li>Multi-State Tax</li>
            <li>Tax Planning</li>
            <li>Amended Returns</li>
            <li>Bookkeeping</li>
            <li>Payroll</li>
            <li>Financial Statements and Projections</li>
            <li>Budgeting</li>
            <li>Free Initial Consultation</li>
            <li>Free Review of Prior Tax Returns</li>
            <li>Pricing</li>
          </ul>
        </article>

        <article className='home'>
        <div className='home__head'>
            <h3>Clients</h3>
          </div>

          <ul className='home__list'>
            <li>Individuals</li>
            <li>Sole Proprietors</li>
            <li>Partnerships</li>
            <li>S-Corps</li>
          </ul>
        </article>

        <article className='home'>
        <div className='home__head'>
            <h3>Staff</h3>
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
            <h3>Resources</h3>
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

    </section>
  )
}

export default Home