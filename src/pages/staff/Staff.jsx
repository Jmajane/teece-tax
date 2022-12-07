import Bailey from '../../assets/Bailey.jpg'
import './staff.css'

const Staff = () => {
  return (
    <section id='staff'>
      <div className='container staff__container'>
        <article className='staffOne'>
          <div className='staff__middle'>
              <div className='staff__info'>Shawn Teece is a Tax Accountant and owner 
              of Teece Tax Solutions, a full-service tax practice and bookkeeping 
              company in Western MA. He founded the company back in 2010 specializing 
              in personal tax preparation. Shawn has obtained Bachelor’s and Master’s 
              degrees from Westfield State University and is the CFO of a local 
              organization in Western MA.</div>
          </div> 
          <img className="staff__image" src={Bailey} alt="staff" />
        </article>

        <article className='staffTwo'>
          <div className='staff__middle'>
              <div className='staff__info'>Zuleyka Alvelo-Teece is an Accountant that 
              works as a Tax Preparer for Teece Tax Solutions, a full-service tax 
              practice and bookkeeping company in Western, MA. She started working with 
              taxes in 2011 back in Puerto Rico where she obtained her Bachelor’s Degree 
              in Accounting from University of Puerto Rico and her Master’s Degree in 
              Management from University of Turabo.  In her current role as a Tax Preparer, 
              she specializes in personal tax returns and offers her services both in 
              English and Spanish.  She also stands out as a Comptroller in a local 
              organization in Western Massachusetts.</div>
          </div> 
          <img className="staff__image" src={Bailey} alt="staff" />
        </article>

      </div>
    </section>
  )
}

export default Staff